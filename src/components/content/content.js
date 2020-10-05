import React from 'react';
import { useSelector } from 'react-redux'

const Content = () => {
    const myPage = useSelector(state => state.pages.pages);
    const myCurrentPage = useSelector(state => state.pages.currentPage);
    const styles = {
        div: {
            backgroundColor: '#e6e6fa'
        },
        h1: {
            textAlign: 'center',
        },
        divContent: {
            letterSpacing: '3px',
            fontSize: '20px',
        }
    }

    return (
        <div style={styles.div}>
            <h1 style={styles.h1}>
                {myPage[myCurrentPage].title}
            </h1>
            <div style={styles.divContent}>
                {myPage[myCurrentPage].content}
            </div>
        </div>
    );
};

export default Content;