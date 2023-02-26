import React from 'react'
import './form.css'
import upload from '../../assets/upload.png'

const Form = () => {
  return (
    <div className='kivlic__form section__padding'>
      <div className='kivlic__form-title'>
        <h1>Submit Your Resume</h1>
        <h2>Become discoverable for all of our roles</h2>
      </div>
      <div className='kivlic__form-body'>
        <div className='kivlic__form-body_title'>
          <h3>Personal Details</h3>
          <p>Please complete the below form and attach a CV.</p>
        </div>
        <div className='kivlic__form-body_container'>
          <div className='kivlic__form-body_container-field' id='kivlic__form-email'>
            <p>Email Address</p>
            <input type="text" />
          </div>
          <div className='kivlic__form-body_container-field'>
            <p>First Name</p>
            <input type="text" />
          </div>
          <div className='kivlic__form-body_container-field'>
            <p>Last Name</p>
            <input type="text" />
          </div>
          <div className='kivlic__form-body_container-field' id='kivlic__form-telephone'>
            <p>Telephone</p>
            <input type="text" />
            <p>Please include your country and area code</p>
          </div>
          <div className='kivlic__form-body_container-field' id='kivlic__form-upload'>
            <p>Upload CV</p>
            <button type='button' className='kivlic__form-body_container-field_button'>Upload CV
             <img src={upload} alt="upload" />
            </button>
            <p>Select resume file (TXT, PDF or Word DOC)</p>
          </div>
          <div className='kivlic__form-body_container-submit'>
            <button type='submit'>Submit</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form