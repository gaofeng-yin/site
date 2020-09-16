import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
/*import me from '../assets/images/mezibo.jpg';*/

function AboutPage(props){

    return(
        <div className="page-content">

            <Content>
            <Hero title={props.title} />
            {/*<img className="site-image" src={me} alt="img" />
                <p><br></br></p> */}
                <p>Hello there!</p>
                <p>My name's Gaofeng Yin. I'm computer science graduate student from 
                    institute polytechnic of Bragança.</p>
                <p>As junior, i would like to become a full stack developer because i enjoy creating contents 
                    and facing challanges.</p>
                <p>I'm a flexible, ethical and enthusiastic hard-working IT guy, who's always ready 
                    to learn something more in different areas of technologies.</p>
                <p> Something that really fascinate me is IoT and automation.
                    And i'm verily passionate about solving complex problems and develop my personal skill.</p>
            </Content>
        </div>
    );

}

export default AboutPage;