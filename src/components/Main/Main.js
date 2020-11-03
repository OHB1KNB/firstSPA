import React from 'react';

import pages from '../../mocks/pages.json';

const mainPageId = 0;

const Main = () => (
    <div>
        <h1>
            {pages[mainPageId].title}
        </h1>

        <h1>
            {pages[mainPageId].content}
        </h1>
    </div>
);

export default Main;
