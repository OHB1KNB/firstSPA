import React from 'react';
import { switchPage } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

import './header.css'

const Header = () => {
    const dispatch = useDispatch();
    const myPage = useSelector(state => state.pages.pages);

    return (
            <div>
                <ul>
                    {myPage.map(({ id, title }) => (
                        <button
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