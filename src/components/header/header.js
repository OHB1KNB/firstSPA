import React from 'react';
import { switchPage } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const myPage = useSelector(state => state.pages.pages);

    return (
        <nav>
            <div className="nav-wrapper">
                <ul
                    id="nav-mobile"
                    className="left hide-on-med-and-down"
                >
                    {myPage.map(({ id, title }) => (
                        <li
                            key={id}
                            onClick={() => dispatch(switchPage(id))}
                        >
                            <button>
                                {title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Header;