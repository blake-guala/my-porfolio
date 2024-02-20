import React from 'react'
import style from './GetInTouch.module.css'

export const GetInTouch = () => {
  return (
    <div>
        <div className={`${style.sectionBox} ${style.bottom} ${style.info} ${style.form}`} >
            <h4 className={style.infoHeader}>Leave a Message</h4>
            <form className={`${style.container} ${style.formCustom}`} >
            <hr />
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"  name='email' className={`form-control ${style.inputCustom}`}  placeholder='your name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name='password' className={`form-control ${style.inputCustom}`}   placeholder='your email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label ">Message</label>
                    <textarea type="text" name='password' className={` ${style.inputCustom} ${style.messageBody} `}  
                    placeholder='write your message...' />
                </div>
                <button type="submit " className={`btn btn-primary ${style.buttonCustom}`}>Send</button>
            </form>
        </div>
    </div>
  )
}
