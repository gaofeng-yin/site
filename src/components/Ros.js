import React from 'react';
import ros from '../assets/images/ros.png';
import giticon from '../assets/images/giticon.svg';
function Ros(){
    return(
        <div className="card">
        <h3>ROS turtlesim teleop</h3>
        <img className="site-image" src={ros} alt="img" />
            <p><br></br>Code in Python, developed for ROS to teleoperate ground robots using keyboard (in this case a simulation robot).
            The Robot Operating System (ROS) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify
             the task of creating complex and robust robot behavior across a wide variety of robotic platforms.</p>
             <a href="https://github.com/gaofeng-yin/ros_turtlesim_teleop" target="_blank" rel="noopener noreferrer">
             <img className="link" src={giticon} alt="img" /></a>
            </div>
    );
}

export default Ros;