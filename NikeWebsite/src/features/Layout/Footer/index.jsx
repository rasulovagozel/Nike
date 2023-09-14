import React from 'react'
import "./footer.scss"
import {BsTwitter} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {TfiYoutube} from "react-icons/tfi";
import {ImInstagram} from "react-icons/im";
const Footer = () => {
  return (
    <>
    <section id="footer">
    <div className="container">
      <div className="row">
        <div className="col-8">
         <div className="list">
         <ul className="strong">
          <li>Find A Store</li>
          <li>Become A Member</li>
          <li>Sign Up for Email</li>
          <li>Send Us Feedback</li>
          <li>Student Discounts</li>
         </ul>
         </div>
         <div className="list">
         <ul className='second'>
          <li className='active'>Get Help</li>
          <li>Order Status</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Payment Options</li>
          <li>Contact Us On Nike.com Inquiries</li>
          <li>Contact Us On All Other Inquiries</li>
         </ul>
         </div>
         <div className="list">
         <ul className='third'>
          <li className='active'>About Nike</li>
          <li>News</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Sustainability</li>
         </ul>
         </div>
        </div>
        <div className="col-4">
        <BsTwitter />
        <BsFacebook />
        <TfiYoutube />
        <ImInstagram />
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default Footer;