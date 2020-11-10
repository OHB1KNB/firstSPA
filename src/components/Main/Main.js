import React from 'react';

import pages from '../../mocks/pages.json';

const mainPageId = 0;

const Main = () => (
    <div>
        <h1>
            {pages[mainPageId].title}
        </h1>

        <h2>
            {pages[mainPageId].content}
        </h2>
    </div>
);

export default Main;