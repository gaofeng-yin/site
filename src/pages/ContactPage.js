import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import link from '../assets/images/link.svg';
import inst from '../assets/images/inst.svg';
import face from '../assets/images/face.svg';
import mail from '../assets/images/mail.svg';
import goodr from '../assets/images/goodr.svg';


function ContactPage (props){

        return(
            <div className="page-content">
                <Hero title={props.title} /> 
                <Content>
                    <p>If you have any question, make sure to send me message or if you are interested, connect with me.</p>
                <a href="mailto:gaofengyin@hotmail.com"> <img className="link" src={mail} alt="img" /></a>
                <a href="https://www.linkedin.com/in/gaofengyin/" target="_blank" rel="noopener noreferrer">
                <img className="link" src={link} alt="img" /></a>
                <a href="https://www.instagram.com/gaofing/" target="_blank" rel="noopener noreferrer">
                <img className="link" src={inst} alt="img" /></a>
                <a href="https://www.facebook.com/Gaofeng.yin/" target="_blank" rel="noopener noreferrer">
                <img className="link" src={face} alt="img" /></a>
                <a href="https://www.goodreads.com/user/show/80938079-gaofeng" target="_blank" rel="noopener noreferrer">
                <img className="link" src={goodr} alt="img" /></a>
            
                </Content>
            </div>
        );

}

export default ContactPage;