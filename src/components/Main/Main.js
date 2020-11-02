import React from 'react';

import pages from '../../mocks/pages.json';

const Main = () => {

    return (
        <div>
            <h1>
                {pages[0].title}
            </h1>

            <h1>
                {pages[0].content}
            </h1>
        </div>
    )
}

export default Main;