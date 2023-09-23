import React,{useRef} from 'react'
import './contact.css'
import FacebookIcon from "../../assets/facebook-icon.png"
import YoutubeIcon from "../../assets/youtube.png"
import InstagramIcon from "../../assets/instagram.png"
import emailjs from "@emailjs/browser"
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vgzf5tm', 'template_xfx4qsy', form.current, 'Rey5obCn38MGT5CUY')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fillout the form below so that you can contact me form any help and for any update</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type='text' className='name' placeholder='Your Name' name='your_name'/>
              <input type='email' className='email' placeholder='Your Email' name='your_email'/>
              <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className='submitBtn'>Submit</button>
              <div className='Links'>
                <img src={FacebookIcon} alt='Facebook' className='link'/>
                <img src={YoutubeIcon} alt='Youtube' className='link'/>
                <img src={InstagramIcon} alt='Instagram' className='link'/>
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
