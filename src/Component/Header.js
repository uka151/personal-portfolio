import React, { Component } from 'react';
import { NavItem, Navbar, Nav, NavbarBrand, NavLink } from 'reactstrap';



class Header extends Component {
    render() {
        return (
            <Navbar dark color="secondary">
                <div className="container m-0">

                    <NavbarBrand>
                        <h2>Umesh Kr. Agrahari</h2>
                    </NavbarBrand>
                    <Nav className="nav justify-content-end">
                        <NavItem>
                            <NavLink className="nav-link" to='/About'>
                                <span className="fa fa-info fa-lg">About</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Skills">
                                <span className="fa fa-cogs fa-lg">Skills</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Education">
                                <span className="fa fa-list fa-lg">Education</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Project">
                                <span className="fa fa-task fa-lg">Project</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Contact">
                                <span className="fa fa-address-card fa-lg">Contact</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        );
    }
}

export default Header;