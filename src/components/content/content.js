import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        myPage: state.pages.pages,
        myCurrentPage: state.pages.currentPage
    };
};

const Content = ({ myPage, myCurrentPage }) => {
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

export default connect(mapStateToProps, null)(Content);