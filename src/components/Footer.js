import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer(){

    return(
        <footer className="footer">
            <Container className="border-top justify-content-between" fluid={true}>
                  <Row>
                      <Col>
                   <span className="footer-span">Copyright &copy; Gaofeng</span></Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;