import React from 'react'

export const GetInTouch = () => {
  return (
    <div>
        <div className=" section-box bottom info form " >
            <h4 className='info-header'>Leave a Message</h4>
            <form className='container form-custom' >
            <hr />
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text"  name='email' className="form-control input-custom"  placeholder='your name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name='password' className="form-control input-custom"  placeholder='your email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label ">Message</label>
                    <textarea type="text" name='password' className="form-control input-custom message" 
                    placeholder='write your message...' />
                </div>
                <button type="submit " className="btn btn-primary button-custom button-custom ">Submit</button>
            </form>
        </div>
    </div>
  )
}
