import React from 'react';

const Footer = () => {
    const styles = {
        div: {
            backgroundColor: '#7f7679',
            textAlign: 'right'
        }
    }
    return (
        <footer>
            <div style={styles.div}>
                <h4 style={styles.h4}>
                    Contacts
                </h4>
                <a href={'skype:darknight5022'}>
                    Skype: darknight5022
                </a>
            </div>
        </footer>
    );
};

export default Footer;