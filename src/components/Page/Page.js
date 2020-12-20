import React from 'react';
import { useSelector } from 'react-redux';

const Page = ({pageID}) => {
    const pages = useSelector(state => state.pages.pages);

    return (
    <div>
        <h1>
            {pages[pageID].title}
        </h1>

        <h2>
            {pages[pageID].content}
        </h2>
    </div>
        );
};

export default Page;