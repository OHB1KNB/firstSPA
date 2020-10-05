import React from 'react';
import { switchPage } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const myPage = useSelector(state => state.pages.pages);
    const styles = {
        ul: {
            listStyle: 'none',
            margin: 0,
            padding: 0
        },
        button: {
            backgroundColor: '#555555',
            border: 'none',
            color: 'white',
            padding: '20px 150px',
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '2px',
            width: '33%',
        }
    }

    return (
            <div>
                <ul style={styles.ul}>
                    {myPage.map(({ id, title }) => (
                        <button style={styles.button}
                            key={id}
                            onClick={() => dispatch(switchPage(id))}
                        >
                            {title}
                        </button>
                    ))}
                </ul>
            </div>
    );
};

export default Header;