import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { styles } from '../styles/style';
import { SectionWrapper } from '../higher_order_component';
import { slideIn } from '../motion';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => { }
  const handleSubmit = (e) => { }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        Hello
    </div>
  )
}

export default SectionWrapper(Contact, "contact")