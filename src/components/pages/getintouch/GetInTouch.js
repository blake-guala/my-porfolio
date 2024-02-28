import React, { useRef } from 'react'
import style from './GetInTouch.module.css'
import emailjs from '@emailjs/browser';


export const GetInTouch = () => {

    

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        
    
        emailjs
          .sendForm('service_o2j7wbh', 'template_dex67mp', form.current, {
            publicKey: 'HJclrO3DeJ5EijvTO',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div id='hire'>
        <div className={`${style.sectionBox} ${style.bottom} ${style.info} ${style.form}`} >
            <h4 className={style.infoHeader}>Leave a Message</h4>
            <form ref={form} onSubmit={sendEmail} className={`${style.container} ${style.formCustom}`} >
            <hr />
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"  name='user_name' className={` ${style.inputCustom}`}  placeholder='your name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name='user_email' className={` ${style.inputCustom}`}   placeholder='your email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label ">Message</label>
                    <textarea type="text" name='message' className={` ${style.inputCustom} ${style.messageBody} `}  
                    placeholder='write your message...' />
                </div>
                <button type="submit " className={`btn btn-primary ${style.buttonCustom}`}>Send</button>
            </form>
        </div>
    </div>
  )
}
