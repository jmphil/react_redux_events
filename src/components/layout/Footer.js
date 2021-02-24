import React from 'react';
import {Navbar} from 'react-bootstrap'
import logo from '../../powered_by_eventbrite.png'

const Footer = () => {
    return (
        <Navbar bg="light" variant="light" className="sticky">
            <Navbar.Brand href="https://www.eventbrite.com/">
            <img
                alt="Powered By Eventbrite"
                src={logo}
                width="120"
                height="50"
                className="d-inline-block"
            />{' '}
            </Navbar.Brand>
        </Navbar>
    )
}

export default Footer
            