import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'gaofeng',
      headerLinks: [
        {title: 'home', path: '/'},
        {title: 'about', path: '/about'},
        {title: 'contact', path: '/contact'},
        {title: 'project', path: '/project'}
      ],
      home: {
        title: 'Be Limitless',
        subTitle: 'You are what you put in your head',
        text: 'Lets see who i am'
      },
      about: {
        title: 'About me'
      },
      contact: {
        title: 'Let\'s talk'
      },
      project: {
        title: 'My project'
      }
    }
  }

  render(){
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        
      <Navbar className="border-bottom" bg="transparent" expand="lg">
      <a href="https://gaofeng.netlify.app/" rel="noopener noreferrer"><Navbar.Brand>高峰</Navbar.Brand></a>

        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
        <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/project">Project</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact render={() => <HomePage title={this.state.home.title} 
      subTitle={this.state.home.subTitle} 
      text={this.state.home.text} />} />

      <Route path="/about" render={() => <AboutPage title={this.state.about.title} />}/>

      <Route path="/project" render={() => <ProjectPage title={this.state.project.title} />}/>

      <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />}/>



      </Container>
    </Router>
  );
}
}

export default App;
