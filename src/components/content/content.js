import React from 'react';
import { useSelector } from 'react-redux'

const Content = () => {
    const myPage = useSelector(state => state.pages.pages);
    const myCurrentPage = useSelector(state => state.pages.currentPage);

    return (
        <div>
            <h1>
                {myPage[myCurrentPage].title}
            </h1>
            <div>
                {myPage[myCurrentPage].content}
            </div>
        </div>
    );
};

export default Content;