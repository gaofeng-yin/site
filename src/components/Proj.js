import React from 'react';
import giticon from '../assets/images/giticon.svg';
import parser from '../assets/images/parser.png';
import ros from '../assets/images/ros.png';
import budgetapp from '../assets/images/budgetapp.png';
import website from '../assets/images/website.png';
import eli from '../assets/images/eli.png';

function Proj(){
    
    const projetos = [
        {
            title: 'Puppet to Ansible compiler',
            img: eli,
            description: 'Compiler which translate Puppet module to Ansible role. Built using Eli: Translator Construction Made Easy. Used to facilitate migration from Puppet to Ansible.',
            link: 'https://github.com/gaofeng-yin/Puppet2Ansible'
        },
        {
            title: 'Budget app',
            img: budgetapp,
            description: 'Budget calculator built using Angular. A small boost to getting started with a basic Angular application.',
            link: 'https://github.com/gaofeng-yin/budget_app'
        },
        {
            title: 'Portfolio website',
            img: website,
            description: 'Portfolio website, built from scratch using React.',
            link: 'https://github.com/gaofeng-yin/site'
        },
        {
            title: 'Json to html table',
            img: parser,
            description: 'Compiler built using YACC&LEX which translate json file, containing Google calendar info, into HTML table cotent. This may help to better visualization of the data.',
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
            <img className="link-proj" src={giticon} alt="img" /></a>
        </div> 
        )}
    </div>
    );
}

export default Proj