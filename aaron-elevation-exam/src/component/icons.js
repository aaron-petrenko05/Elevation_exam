import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
    const iconList = [
        {
            icon: faTwitter
        },
        {
            icon: faFacebookSquare
        },
        {
            icon: faInstagram
        }
    ]
    return (
        <div class="navbar-icon">
        {
            iconList.map((iconMap) => (
                <a href="#">
                    <FontAwesomeIcon icon={iconMap.icon} />
                </a>
            ))
        }
        </div>
        
    )
}

export default Icons;