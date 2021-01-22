import React from 'react';

import classes from './BackToTop.module.css';

const BackToTop = () => {

    const backToTopHandler = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return (
        <div
            className={`${classes.backToTop} bg-1`}
            onClick={backToTopHandler}
        >
                &uarr;
        </div>
    );
};

export default BackToTop;