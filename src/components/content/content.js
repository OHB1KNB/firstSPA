import React from 'react';

export default function Content({ page }) {
    return (
        <div>
            <h1>
                {page.title}
            </h1>
            <div>
                {page.content}
            </div>
        </div>
    );
};
