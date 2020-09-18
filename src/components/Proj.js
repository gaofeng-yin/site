import React from 'react';
import giticon from '../assets/images/giticon.svg';
import parser from '../assets/images/parser.png';
import ros from '../assets/images/ros.png';

function Proj(){
    
    const projetos = [
        {
            title: 'Puppet to Ansible compiler',
            img: 'null',
            description: 'Almost Done',
            link: 'null'
        },
        {
            title: 'Budget app',
            img: 'null',
            description: 'In Progress',
            link: 'null'
        },
        {
            title: 'Portfolio website',
            img: 'null',
            description: 'In Progress',
            link: 'null'
        },
        {
            title: 'Json to html table',
            img: parser,
            description: 'Compiler built using YACC&LEX which translate json file, containing Google calendar info, into HTML table cotent. This may help better visualization of the data.',
            link: 'https://github.com/gaofeng-yin/language_processor'

        },
        {
            title: 'ROS turtlesim teleop',
            img: ros,
            description: 'Code in Python, developed for ROS to teleoperate ground robots using keyboard (in this case a simulation robot). The Robot Operating System (ROS) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robotic platforms.',
            link: 'https://github.com/gaofeng-yin/ros_turtlesim_teleop'

        }
    ]
    
    return(
        <div>
        {projetos.map(projetos =>
        <div className="card">
            <h3>{projetos.title}</h3>
            <img className="site-image" src={projetos.img} alt="img" />
            <p><br></br>{projetos.description}</p>
            <a href={projetos.link} target="_blank" rel="noopener noreferrer">
            <img className="link" src={giticon} alt="img" /></a>
        </div> 
        )}
    </div>
    );
}

export default Proj