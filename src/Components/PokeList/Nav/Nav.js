import React from 'react';
import './Nav.css';

const Nav = (props) => {

    const { count, currPage, pageSize } = props;

    const lastPage = Math.ceil(count / pageSize);

    const previousDisabled = currPage === 1;
    const nextDisabled = currPage === lastPage;

    const navigateToPage = (page) => {
        if (page !== currPage) {
            props.navigateToPage(page);
        }
    }

    const pages = [];

    if (currPage !== 1) {
        pages.push(
            <li key={'1'} className="page-item">
                <button
                    className="page-link"
                    onClick={() => navigateToPage(1)}
                >
                    1
                </button>
            </li>
        );
    }

    if (currPage - 2 > 2) {

        pages.push(
            <li key={'left'} className="page-item">
                <button
                    className="page-link"
                    disabled
                >
                    ...
                </button>
            </li>
        );

    }

    if (currPage - 2 >= 2) {
        pages.push(
            <li key={`${currPage - 2}`} className="page-item">
                <button
                    className="page-link"
                    onClick={() => navigateToPage(currPage - 2)}
                >
                    {currPage - 2}
                </button>
            </li>
        );
    }

    if (currPage - 1 > 1) {
        pages.push(
            <li key={`${currPage - 1}`} className="page-item">
                <button
                    className="page-link"
                    onClick={() => navigateToPage(currPage - 1)}
                >
                    {currPage - 1}
                </button>
            </li>
        );
    }

    pages.push(
        <li key={`${currPage}`} className="page-item active">
            <button
                className="page-link"
            >
                {currPage}
            </button>
        </li>
    )

    if (currPage !== lastPage) {
        if (currPage + 1 < lastPage) {
            pages.push(
                <li key={`${currPage + 1}`} className="page-item">
                    <button
                        className="page-link"
                        onClick={() => navigateToPage(currPage + 1)}
                    >
                        {currPage + 1}
                    </button>
                </li>
            )
        }

        if (currPage + 2 < lastPage) {
            pages.push(
                <li key={`${currPage + 2}`} className="page-item">
                    <button
                        className="page-link"
                        onClick={() => navigateToPage(currPage + 2)}
                    >
                        {currPage + 2}
                    </button>
                </li>
            );
        }

        if (currPage + 2 < lastPage - 1) {
            pages.push(
                <li key={'right'} className="page-item">
                    <button
                        className="page-link"
                        disabled
                    >
                        ...
                    </button>
                </li>
            );
        }

        pages.push(
            <li key={`${lastPage}`} className="page-item">
                <button
                    className="page-link"
                    onClick={() => navigateToPage(lastPage)}
                >
                    {lastPage}
                </button>
            </li>
        )

    }

    return (
        <nav>
            <ul className="pagination justify-content-end">
                <li key={'previous'} className="page-item" disabled={previousDisabled}>
                    <button
                        className={`page-link ${previousDisabled ? 'disabled' : ''}`}
                        onClick={() => navigateToPage(currPage - 1)}
                        disabled={previousDisabled}
                    >
                        Anterior
                    </button>
                </li>
                {pages}
                <li key={'next'} className="page-item">
                    <button
                        className={`page-link ${nextDisabled ? 'disabled' : ''}`}
                        onClick={() => navigateToPage(currPage + 1)}
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
