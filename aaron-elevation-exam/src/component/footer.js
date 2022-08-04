import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

class FontLeaf extends Component {
    render() {
        return(
            <FontAwesomeIcon icon={faLeaf} />
        );
    }
}

function Footer() {
    return (
        <footer className='main-footer'>
            <Container fluid>
                <Row>
                    <Col>
                    <div className='main-footer-container'>
                        <a className='navbar-brand' href='#home'><FontLeaf className='navbar-brand-icon'></FontLeaf>THE GREEN LEAF</a>
                    </div>
                    </Col>
                    <Col className='d-flex justify-content-lg-end align-items-lg-center'>
                    <ul className='main-footer-list'>
                        <li><a href='#'>Terms of Use</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;