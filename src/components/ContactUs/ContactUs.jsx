import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div>
        <p>Leave Us Your Info</p>
        <div>
          <div className="flex_between_start">
            <label>Your Full Name</label>
            <input type="text" />
          </div>
          <div className="flex_between_start">
            <label>Your Email</label>
            <input type="text" />
          </div>
          <div className="flex_between_start">
            <label>Your Message</label>
            <textarea />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs