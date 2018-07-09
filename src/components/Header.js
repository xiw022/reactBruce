import React from 'react';
import {Navbar, NavItem, Icon, Button} from 'react-materialize';
import {Link} from 'react-router-dom';

const header = () => {
    return(
        <div className = "Header">
            <Navbar brand='Bruce Wang' left>
            <NavItem href='/#/login'>Login</NavItem>
            <NavItem href='/#/register'>Register</NavItem>
            <NavItem href='/#/profile/change_password'>Change Password</NavItem>
            <NavItem href='/#/profile/edit'>Edit Profile</NavItem>
            <NavItem href='/#/about'>About Me</NavItem>
            <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
            </Navbar>
        </div>
    )
};

export default header;
