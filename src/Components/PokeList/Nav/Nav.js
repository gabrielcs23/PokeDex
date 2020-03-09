import React from 'react';
import './Nav.css';

const Nav = (props) => {

    const { previousDisabled, nextDisabled, onPreviousNav, onNextNav} = props;

    return (
        <nav>
            <ul className="pagination justify-content-end">
                <li className="page-item" disabled={previousDisabled}>
                    <button
                        className={`page-link ${previousDisabled ? 'disabled' : ''}`}
                        onClick={onPreviousNav}
                        disabled={previousDisabled}
                    >
                        Anterior
                    </button>
                </li>
                <li className="page-item" disabled={nextDisabled}>
                    <button
                        className={`page-link ${nextDisabled ? 'disabled' : ''}`}
                        onClick={onNextNav}
                        disabled={nextDisabled}
                    >
                        Próximo
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default Nav;
