import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const Layout = () => {
    const [ toggle, setToggle ] = useState(false);

    const onToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Star Wars</NavbarBrand>
            <NavbarToggler onClick={onToggle} />
            <Collapse isOpen={toggle} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/characters">Characters</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/planets">Planets</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
    );
};

export default Layout;