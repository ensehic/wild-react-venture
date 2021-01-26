import React from 'react';

import classes from './Point.module.css';
import parentClasses from '../ReasonToPlay.module.css';
import { IReasonToPlay } from '../../../types';

interface PointProps {
    pointClicked: () => void,
    reason: IReasonToPlay,
    showExplanation: boolean
}

const Point = ({pointClicked, reason, showExplanation}: PointProps) => {
    /**
     * Show a downwards facing arrow when explanation isn't opened, upwards facing when it is open.
     */
    const displayArrow = () => showExplanation ? String.fromCharCode(0x25B2) : String.fromCharCode(0x25BC);

    return (
        <p
            className={[parentClasses.reasonContent, parentClasses.point].join(' ')}
            onClick={pointClicked}
        >
            <span>
                {`${reason.reasonNum}. ${reason.point}`}
            </span>
            <span className={classes.arrowSpan}>
                { reason.explanation && displayArrow() }
            </span>
        </p>
    );
};

export default Point;