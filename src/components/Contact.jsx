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
        <div className='flex flex-col md:flex-row gap-10'>
          <motion.div
            variants={fadeIn("right", "spring", 0.1, 0.75)}
            className={`glass-card flex-1 p-6 rounded-2xl ${
              theme === 'dark' 
                ? 'border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]' 
                : 'border border-sky-500/30 shadow-[0_0_15px_rgba(14,165,233,0.2)] hover:shadow-[0_0_25px_rgba(14,165,233,0.3)]'
            }`}
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
                  className={`bg-card/50 backdrop-blur-sm py-4 px-6 placeholder:text-muted-foreground text-foreground rounded-lg outline-none border ${
                    theme === 'dark' 
                      ? 'border-purple-500/20 focus:border-purple-500/40' 
                      : 'border-blue-500/20 focus:border-blue-500/40'
                  } transition-colors duration-300 font-medium`}
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
                  className={`bg-card/50 backdrop-blur-sm py-4 px-6 placeholder:text-muted-foreground text-foreground rounded-lg outline-none border ${
                    theme === 'dark' 
                      ? 'border-purple-500/20 focus:border-purple-500/40' 
                      : 'border-blue-500/20 focus:border-blue-500/40'
                  } transition-colors duration-300 font-medium`}
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
                  className={`bg-card/50 backdrop-blur-sm py-4 px-6 placeholder:text-muted-foreground text-foreground rounded-lg outline-none border ${
                    theme === 'dark' 
                      ? 'border-purple-500/20 focus:border-purple-500/40' 
                      : 'border-blue-500/20 focus:border-blue-500/40'
                  } transition-colors duration-300 font-medium resize-none`}
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
                  className={`py-3 px-8 rounded-xl outline-none text-foreground font-bold transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]' 
                      : 'bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                  }`}
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
            variants={fadeIn("left", "spring", 0.1, 0.75)}
            className={`glass-card flex-1 p-6 rounded-2xl ${
              theme === 'dark' 
                ? 'border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]' 
                : 'border border-sky-500/30 shadow-[0_0_15px_rgba(14,165,233,0.2)] hover:shadow-[0_0_25px_rgba(14,165,233,0.3)]'
            }`}
          >
            <p className={`${styles.sectionSubText} text-muted-foreground`}>Want to know more</p>
            <h3 className={`${styles.sectionHeadText} text-foreground`}>Connect.</h3>
            
            <div className='mt-12 flex flex-col gap-8'>
              <div className={`bg-card/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${
                theme === 'dark' 
                  ? 'border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                  : 'border border-sky-500/30 shadow-[0_0_10px_rgba(14,165,233,0.2)]'
              }`}>
                <h3 className="text-2xl sm:text-3xl text-foreground font-bold tracking-wider">Email</h3>
                <div className="flex items-center gap-3 mt-2">
                  <a 
                    href={`mailto:${email}`} 
                    className={`text-foreground transition-all duration-300 select-text cursor-pointer break-all ${
                      theme === 'dark' 
                        ? 'hover:text-cyan-500 underline-offset-4 decoration-cyan-500/50 hover:decoration-cyan-500' 
                        : 'hover:text-sky-500 underline-offset-4 decoration-sky-500/50 hover:decoration-sky-500'
                    }`}
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyToClipboard}
                    className={`p-1 rounded-lg transition-colors cursor-pointer flex-shrink-0 ${
                      theme === 'dark' 
                        ? 'hover:bg-cyan-500/20' 
                        : 'hover:bg-sky-500/20'
                    }`}
                  >
                    <img src={copy} alt="copy" className="w-6 h-6" />
                  </button>
                  {emailCopied && (
                    <span className={`font-medium whitespace-nowrap ${
                      theme === 'dark' 
                        ? 'text-cyan-500' 
                        : 'text-sky-500'
                    }`}>
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              <div className={`bg-card/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${
                theme === 'dark' 
                  ? 'border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                  : 'border border-sky-500/30 shadow-[0_0_10px_rgba(14,165,233,0.2)]'
              }`}>
                <h3 className="text-2xl sm:text-3xl text-foreground font-bold">Socials</h3>
                <div className="flex flex-wrap gap-4 mt-4">
                  {socials.map((handle, index) => (
                    <button
                      key={`social-${handle.name}`}
                      className={`bg-card/50 backdrop-blur-sm p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                        theme === 'dark' 
                          ? 'border border-cyan-500/30 hover:bg-cyan-500/20 shadow-[0_0_5px_rgba(6,182,212,0.1)]' 
                          : 'border border-sky-500/30 hover:bg-sky-500/20 shadow-[0_0_5px_rgba(14,165,233,0.1)]'
                      }`}
                      onClick={() => window.open(handle.link, "_blank")}
                    >
                      <img src={handle.icon} alt={handle.name} className="w-10 h-10" />
                    </button>
                  ))}
                </div>
              </div>

              <div className={`bg-card/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${
                theme === 'dark' 
                  ? 'border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                  : 'border border-sky-500/30 shadow-[0_0_10px_rgba(14,165,233,0.2)]'
              }`}>
                <h3 className="text-2xl sm:text-3xl text-foreground font-bold">Resume</h3>
                <div className="flex items-center gap-3 mt-2">
                  <a 
                    href={resumeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`text-foreground transition-all duration-300 select-text cursor-pointer ${
                      theme === 'dark' 
                        ? 'hover:text-cyan-500 underline-offset-4 decoration-cyan-500/50 hover:decoration-cyan-500' 
                        : 'hover:text-sky-500 underline-offset-4 decoration-sky-500/50 hover:decoration-sky-500'
                    }`}
                  >
                    View My Resume
                  </a>
                  <button
                    onClick={copyResumeToClipboard}
                    className={`p-1 rounded-lg transition-colors cursor-pointer ${
                      theme === 'dark' 
                        ? 'hover:bg-cyan-500/20' 
                        : 'hover:bg-sky-500/20'
                    }`}
                  >
                    <img src={copy} alt="copy" className="w-6 h-6" />
                  </button>
                  {resumeCopied && (
                    <span className={`font-medium ${
                      theme === 'dark' 
                        ? 'text-cyan-500' 
                        : 'text-sky-500'
                    }`}>
                      Copied!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");