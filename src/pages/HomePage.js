import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

function HomePage(props){

    return(
        <div className="page-content">
            <Hero title={props.title}  /> 
            <Carousel />
            <Footer /> 
        </div>
    );

}

export default HomePage;