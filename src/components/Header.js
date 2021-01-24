import React from 'react';

import {
    Navbar,
    NavbarBrand,
    NavbarToggler
} from 'reactstrap';

export default function Header(props) {
    return (
        <header>
            <Navbar color="light" light>
                <NavbarBrand>
                    <img src="https://via.placeholder.com/150x50" alt="" />
                </NavbarBrand>
                <NavbarToggler/>
            </Navbar>
        </header>
    );
};
