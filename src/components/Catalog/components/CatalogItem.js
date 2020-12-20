import { useParams } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

const CatalogItem = () => {
    const myPage = useSelector(state => state.pages.catalog);
    const { itemId } = useParams();

    return (
        <div>
            <h1>
                {myPage[itemId].title}
            </h1>

            <div className={'content'}>
                {myPage[itemId].content}
            </div>
        </div>
    );
}

export default CatalogItem;