import React from "react";

export default function Header() {
    return (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo right">My_Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="">Button 1</a></li>
                <li><a href="">Button 2</a></li>
                <li><a href="">Button 3</a></li>
            </ul>
        </div>
    </nav>
    )
}
