import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Ros from '../components/Ros';
import Json2html from '../components/Jason2html';
import Puppet2ansible from '../components/Puppet2ainsible';
/*import workmiddle from '../assets/images/workresize.jpg';*/



function ProjectPage(props){
    return(
        <div className="page-content">
        <Content>
            <Hero title={props.title} />
            {/*<img className="site-image" src={workmiddle} alt="img" />*/}
            <Puppet2ansible />
            <p></p>
            <Json2html />
            <p></p>
            <Ros />
        </Content>
        </div>
    );
}

export default ProjectPage;