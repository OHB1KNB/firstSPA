import React from 'react';

import pages from '../../mocks/pages.json';

const About = () => {

    return (
        <div>
            <h1>
                {pages[1].title}
            </h1>
            <h3>
                {pages[1].content}
            </h3>
        </div>
    )
}

export default About;