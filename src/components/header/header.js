import React from "react";

export default function Header(props) {
    return (
    <nav>
        <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                {props.pages.map((page) => {
                    // взять button c materialize
                    return <li key={page.id} onClick={() => props.onChangePage(page.id-1)}><button>{page.title}</button></li>
                })}
            </ul>
        </div>
    </nav>
    )
}
