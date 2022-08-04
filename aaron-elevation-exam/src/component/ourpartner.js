import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcAmex, faGoogle, faPaypal, faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';

const OurPartnersIcons = () => {
    const iconList = [
        {
            icon: faCcAmex
        },
        {
            icon: faGoogle
        },
        {
            icon: faPaypal
        },
        {
            icon: faAmazon
        },
        {
            icon: faEbay
        }

    ]
    return (
        <Container>
            <div class="navbar-icon">
            {
                iconList.map((iconMap) => (
                    <a href="#">
                        <FontAwesomeIcon icon={iconMap.icon} />
                    </a>
                ))
            }
            </div>
        </Container>
        
    )
}

export default OurPartnersIcons;