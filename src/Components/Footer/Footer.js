// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaWhatsapp , FaTwitter , FaLinkedin} from 'react-icons/fa';
import React from 'react';
const Footer = () => {
    return (
       
        <footer className='py-4 bg-dark'>
            <h5 className='text-center mb-3'>Follow us on Social Media</h5>
            <div className="center">
            
               <div className='d-flex justify-content-center mr-5 display-6'>
               <span><FaFacebookF/></span>
                <span><FaWhatsapp/></span>
                <span><FaTwitter/></span>
                <span><FaLinkedin/></span>
                
                </div>`

            </div>  
        </footer>
    );
};

export default Footer;