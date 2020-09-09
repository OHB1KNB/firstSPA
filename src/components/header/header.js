import React from "react";

export default function Header(props) {
    return (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo right">My_Logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                {/*<li><a href="" id={props.ourAnimals[0].id}>{props.ourAnimals[0].title}</a></li>*/}
                {/*<li><a href="" id={props.ourAnimals[1].id}>{props.ourAnimals[1].title}</a></li>*/}
                {/*<li><a href="" id={props.ourAnimals[2].id}>{props.ourAnimals[2].title}</a></li>*/}
            </ul>
        </div>
    </nav>
    )
}
