import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { socials, email, resumeLink } from '../constants'
import { styles } from '../styles/style'
import { SectionWrapper } from "../higher_order_component";
import { slideIn } from "../motion";
import { copy, link } from "../assets";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [resumeCopied, setResumeCopied] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('')
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const copyResumeToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = resumeLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setResumeCopied(true);

    setTimeout(() => {
      setResumeCopied(false);
    }, 2000);
  }
  const copyToClipboard = () => {
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setEmailCopied(true);

    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  const showSubmitMessage = (message) => {
    setSubmitMessage(message);
    setTimeout(() => {
      setSubmitMessage('');
    }, 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email.trim().length == 0 || form.message.trim().length == 0) {
      showSubmitMessage('Please provide a valid email and a message')
    }
    else {
      setLoading(true);

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name.trim() ?? '[Name]',
            to_name: "Ayush Singh",
            from_email: form.email,
            to_email: import.meta.env.VITE_APP_EMAIL_ID,
            message: form.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            showSubmitMessage("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);

            showSubmitMessage("Ahh, something went wrong. Please try again.");
          }
        );
    }

  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.5] bg-[#131220] bg-opacity-80 py-10 rounded-2xl p-8 max-w-[600px]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Send an Email</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary bg-opacity-50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary bg-opacity-50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary bg-opacity-50 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className="flex flex-wrap flex-row justify-left gap-5 items-center">
            <button
              type='submit'
              className='bg-tertiary bg-opacity-50 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {submitMessage && <p className="text-white text-[18px] font-semibold italic">
              {submitMessage}
            </p>}
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.5] p-8  max-w-[600px] bg-opacity-80 bg-[#131220] py-10 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Want to know more</p>
        <h3 className={styles.sectionHeadText}>Connect.</h3>
        <div className='mt-12 flex flex-col gap-8'>
          <div>
            <h3 className="sm:text-3xl text-[14px] text-white font-bold tracking-wider">Email</h3>
            <div className="flex flex-row flex-wrap justify-left items-center gap-2 mt-2">
              <p className="sm:text-[16px] text-[14px] font-semibold italic lowercase tracking-wider ">{email}</p>
              <img src={copy} alt="copy" width={'24px'} onClick={copyToClipboard} className="cursor-pointer" />
              {emailCopied && <span style={{ marginLeft: '5px' }}>Copied!</span>}
            </div>
          </div>
          <div>
            <h3 className="sm:text-3xl text-2xl font-bold">Socials</h3>
            <div className="flex flex-row gap-5 flex-wrap mt-4">
              {
                socials.map((handle) => {
                  return (
                    <div className="dark-blue-purple-gradient2 p-2 rounded-2xl cursor-pointer" key={`social-${handle.name}`}>
                      <img src={handle.icon} alt={handle.name} onClick={() => window.open(handle.link, "_blank")} width={'50px'} />

                    </div>
                  )
                })}
            </div>
          </div>
          <div>
            <h3 className="sm:text-3xl text-2xl font-bold">Resume</h3>
            <div className="flex flex-row flex-wrap gap-2 justify-start items-center">
              <a href="https://drive.google.com/drive/folders/1DQTRmbh-PqOSv_r6LMoLstIKVwn7aQXL?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 hover:underline transition-colors duration-300 ">View My Resume</a>
              <img src={link} alt="link" width={"24px"} onClick={copyResumeToClipboard} />
              {resumeCopied && <span style={{ marginLeft: '5px' }}>Copied!</span>}
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");