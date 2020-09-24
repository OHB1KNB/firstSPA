import React from 'react';

export default function Header({ pages, onChangePage }) {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul
                    id="nav-mobile"
                    className="left hide-on-med-and-down"
                >
                    {pages.map(({ id, title }) => (
                        <li
                            key={id}
                            onClick={() => onChangePage(id)}
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
