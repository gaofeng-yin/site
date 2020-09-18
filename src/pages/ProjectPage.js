import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Proj from '../components/Proj';
/*import workmiddle from '../assets/images/workresize.jpg';*/



function ProjectPage(props){
    return(
        <div className="page-content">
        <Content>
            <Hero title={props.title} />
            {/*<img className="site-image" src={workmiddle} alt="img" />*/}
            <Proj />
        </Content>
        </div> 
    );
}

export default ProjectPage;