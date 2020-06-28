import React, { Component } from 'react';
import { NavItem, Navbar, Nav, NavbarBrand, NavLink } from 'reactstrap';



class Header extends Component {
    render() {
        return (
            <Navbar>
                <div className="container">
                    <Nav className="nav justify-content-end">
                        <NavbarBrand>
                            <h1>Umesh Kr. Agrahari</h1>
                        </NavbarBrand>

                        <NavItem>
                            <NavLink className="nav-link" to='/#'>
                                <span className="fa fa-info fa-lg">About</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/#">
                                <span className="fa fa-">Skills</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/#">
                                <span className="fa fa-">Education</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/#">
                                <span className="fa fa-">Project</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/#">
                                <span className="fa fa-">Contact</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default Header;