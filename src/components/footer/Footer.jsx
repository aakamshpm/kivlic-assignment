import React from 'react'
import { logo_black, youtube, instagram, facebook, twitter, googleplay, appstore, arrow } from '../../assets'
import './footer.css'

const Footer = () => {
  return (
    <div className='kivlic__footer'>
      <div className='kivlic__footer-container'>
        <div className='kivlic__footer-container_about'>
          <img src={logo_black} alt="logo" />
          <p>KIVLIK is a mobile steam car wash company, which offers premium car wash and detailing services at your doorstep. Conveniently book a car wash with a few taps on your phone.<br></br>KIVLIK has several packages to meet your budget and requirements. Conveniently book a carwash with a few taps using the KIVLIK App or website. You can pick a time, location and package from the App or web. KIVLIK washes each vehicle using our Steam Cleaning system.</p>
        </div>
        <div className='kivlic__footer-container_links'>
          <h2>COMPANY</h2>
          <p>Who We Are</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Report Fraud</p>
          <p>Investor Relations</p>
        </div>
        <div className='kivlic__footer-container_support'>
          <div className='kivlic__footer-container_support-items'>
            <h2>Got Questions?</h2>
              <h1>Help Center</h1>
              <h4>Follow Us</h4>
              <div className='kivlic__footer-container_support-socials'>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <img src={youtube} alt="youtube" />
              </div>
              <div className='kivlic__footer-container_support-download'>
                <img src={appstore} alt="applestore" />
                <img src={googleplay} alt="googleplay" />
              </div>
          </div>
          <div className='kivlic__footer-container_support-arrow'>
          <img src={arrow} alt="arrow" /> 
        </div>
        </div>
      </div>
      <div className='kivlic__footer-end'>
        <div className='kivlic__footer-end_copyright'>
          <p>©2021 Kivlik. All rights reserved.</p>
        </div>
        <div className='kivlic__footer-end_links'>
          <p>Privacy</p>
          <div />
          <p>Terms</p>
          <div />
          <p>Security</p>
          <div />
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  )
}

export default Footer