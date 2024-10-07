import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow navBarBackgroundColor" container light>
                    <NavbarBrand tag={Link} to="/" className="navBarTextColor">Brandon Ochia</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2 navBarToggle" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="navBarTextColor" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="navBarTextColor" to="/pdfSplitter">PDF Splitter</NavLink>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <NavLink tag={Link} className="navBarTextColor" to="/bodyComposition">Body Composition</NavLink>*/}
                            {/*</NavItem>*/}
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
