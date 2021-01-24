import React from 'react';

import {
    Navbar,
    NavbarBrand,
    NavbarToggler
} from 'reactstrap';

export default function Sidebar(props) {
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <h2>School of net</h2>
            </div>
            <div className="list-group">
                <a href="#" className="list-group-item">Link</a>
            </div>
        </aside>
    );
};
