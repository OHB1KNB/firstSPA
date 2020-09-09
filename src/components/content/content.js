import React from "react";
import pagesData from "../../mocks/pages.json"

export default function Content() {
    return (
            <div>
                {pagesData.map((dataDetail) => {
                    return <h1>{dataDetail.title}</h1>
                })}
            </div>
    );
}