import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { socials, email, resumeLink } from '../constants'
import { styles } from '../styles/style'
import { SectionWrapper } from "../higher_order_component";
import { slideIn, fadeIn } from "../motion";
import { copy, link } from "../assets";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const formRef = useRef();
  const { theme } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [resumeCopied, setResumeCopied] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const copyResumeToClipboard = () => {
    navigator.clipboard.writeText(resumeLink);
    setResumeCopied(true);
    setTimeout(() => setResumeCopied(false), 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const showSubmitMessage = (message) => {
    setSubmitMessage(message);
    setTimeout(() => setSubmitMessage(''), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email.trim().length === 0 || form.message.trim().length === 0) {
      showSubmitMessage('Please provide a valid email and a message');
      return;
    }

    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim() || '[Name]',
          to_name: "Ayush Singh",
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showSubmitMessage("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showSubmitMessage("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex xl:flex-row flex-col-reverse gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-[0.5] glass-card border-glow rounded-2xl p-8 max-w-[600px] hover:shadow-lg transition-all duration-300"
          >
            <p className={`${styles.sectionSubText} text-muted-foreground`}>Get in touch</p>
            <h3 className={`${styles.sectionHeadText} text-foreground`}>Send an Email</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'
            >
              <motion.label 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='flex flex-col'
              >
                <span className='text-foreground font-medium mb-4'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className='bg-card/50 backdrop-blur-sm py-4 px-6 placeholder:text-muted-foreground text-foreground rounded-lg outline-none border border-blue-500/20 focus:border-blue-500/40 transition-colors duration-300 font-medium'
                />
              </motion.label>
              <motion.label 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='flex flex-col'
              >
                <span className='text-foreground font-medium mb-4'>Your email</span>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Eg: ayushsingh20april@gmail.com"
                  className='bg-card/50 backdrop-blur-sm py-4 px-6 placeholder:text-muted-foreground text-foreground rounded-lg outline-none border border-blue-500/20 focus:border-blue-500/40 transition-colors duration-300 font-medium'
                />
              </motion.label>
              <motion.label 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex flex-col'
              >
                <span className='text-foreground font-medium mb-4'>Your Message</span>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='Write a message for me.'
                  className='bg-card/50 backdrop-blur-sm py-4 px-6 placeholder:text-muted-foreground text-foreground rounded-lg outline-none border border-blue-500/20 focus:border-blue-500/40 transition-colors duration-300 font-medium resize-none'
                />
              </motion.label>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap items-center gap-5"
              >
                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='glass-button border-glow py-3 px-8 rounded-xl outline-none text-foreground font-bold hover:bg-blue-500/20 transition-all duration-300'
                >
                  {loading ? "Sending..." : "Send"}
                </motion.button>
                {submitMessage && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-foreground text-lg font-medium italic"
                  >
                    {submitMessage}
                  </motion.p>
                )}
              </motion.div>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex-[0.5] glass-card border-glow rounded-2xl p-8 max-w-[600px] hover:shadow-lg transition-all duration-300'
          >
            <p className={`${styles.sectionSubText} text-muted-foreground`}>Want to know more</p>
            <h3 className={`${styles.sectionHeadText} text-foreground`}>Connect.</h3>
            
            <div className='mt-12 flex flex-col gap-8'>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card border-glow p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl sm:text-3xl text-foreground font-bold tracking-wider">Email</h3>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-muted-foreground text-base sm:text-lg font-medium tracking-wider lowercase">
                    {email}
                  </p>
                  <motion.img 
                    src={copy} 
                    alt="copy" 
                    className="w-6 h-6 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={copyToClipboard}
                  />
                  {emailCopied && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-blue-500 font-medium"
                    >
                      Copied!
                    </motion.span>
                  )}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card border-glow p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl sm:text-3xl text-foreground font-bold">Socials</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {socials.map((handle, index) => (
                    <motion.div 
                      key={`social-${handle.name}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="glass-button border-glow p-3 rounded-2xl cursor-pointer hover:bg-blue-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(handle.link, "_blank")}
                    >
                      <img src={handle.icon} alt={handle.name} className="w-10 h-10" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass-card border-glow p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl sm:text-3xl text-foreground font-bold">Resume</h3>
                <div className="flex items-center gap-3 mt-2">
                  <motion.a 
                    href={resumeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-blue-500 underline-offset-4 decoration-blue-500/50 hover:decoration-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    View My Resume
                  </motion.a>
                  <motion.img 
                    src={link} 
                    alt="link" 
                    className="w-6 h-6 cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={copyResumeToClipboard}
                  />
                  {resumeCopied && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-blue-500 font-medium"
                    >
                      Copied!
                    </motion.span>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");