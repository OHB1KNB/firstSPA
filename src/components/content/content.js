import React from "react";

export default function Content(props) {
    return (
            <div>
                <h1>{props.page.content}</h1>
            </div>
    );
}