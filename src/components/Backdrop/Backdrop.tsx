import React from 'react';

import classes from './Backdrop.module.css';

interface BackdropProps {
    backdropClicked: () => void
}

const Backdrop = ({backdropClicked}: BackdropProps) => (
    <div className={classes.Backdrop} onClick={backdropClicked}></div>
);

export default Backdrop;