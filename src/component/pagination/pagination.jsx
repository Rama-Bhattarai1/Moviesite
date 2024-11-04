

import React from 'react';

const Pagination = ({ productPerPage, totalProduct, paginate, activePage }) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className=" flex">
            <ul className='flex gap-4'>
                {pageNumber.map((number) => (
                    <li key={number} className={`page-item${number === activePage ? " bg-blue-600 w-6 h-6 pl-2" : ""}`}>
                        <button onClick={() => paginate(number)} className='bg-gray'>{number}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
