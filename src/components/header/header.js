import React from 'react';
import { switchPage } from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';

const mapStateToProps = state => {
    return {
        myPages: state.pages.pages,
        myCurrentPage: state.currentPage
    };
};

const mapDispatchToProps = {
    switchPage: switchPage
};

const Header = ({ myPages }) => {
    const dispatch = useDispatch();

    return (
        <nav>
            <div className="nav-wrapper">
                <ul
                    id="nav-mobile"
                    className="left hide-on-med-and-down"
                >
                    {myPages.map(({ id, title }) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);