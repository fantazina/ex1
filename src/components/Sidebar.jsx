import React from 'react';
import '../css/Sidebar.css';

function Sidebar() {
    return (
        <div className="side_container">
            <ul className="sidebar_">
                <li className="sidebar_list"><a href="#section1"> ● HOME</a></li>
                <li className="sidebar_list"><a href="#section2">● CONTACT</a></li>
                <li className="sidebar_list"><a href="#section3">● MENU SHORTCUTS</a></li>
                <li className="sidebar_list"><a href="#section4">● CONSULTATION REVIEW</a></li>
                <li className="sidebar_list"><a href="#section5">● PROCESS</a></li>
                <li className="sidebar_list"><a href="#section6">● CUSTOMER</a></li>
                <li className="sidebar_list"><a href="#section7">● SERVICE</a></li>
                <li className="sidebar_list"><a href="#section8">● DIRECTIONS</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;