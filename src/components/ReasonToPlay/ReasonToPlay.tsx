import React, { useState } from 'react';

import classes from './ReasonToPlay.module.css';

interface ReasonToPlayProps {
    reason: { point: string, explanation?: string },
    index: number
}

const ReasonToPlay = ({reason, index}: ReasonToPlayProps) => {
    const [showExplanation, setShowExplanation] = useState(false);

    const pointClickedHandler = () => setShowExplanation(!showExplanation);

    /**
     * Show a downwards facing arrow when explanation isn't opened, upwards facing when it is open.
     */
    const displayArrow = () => showExplanation ? String.fromCharCode(0x25B2) : String.fromCharCode(0x25BC);

    return (
        <div className={classes.reasonToPlay}>
            <p
                className={[classes.reasonContent, classes.point].join(' ')}
                onClick={pointClickedHandler}
            >
                <span>{`${index}. ${reason.point}`}</span>

                <span className={classes.arrowSpan}>
                    {
                        reason.explanation && displayArrow()
                    }
                </span>
            </p>

            {
                reason.explanation &&
                <p
                    className={[
                        classes.reasonContent,
                        classes.explanation,
                        showExplanation && classes.show
                    ].join(' ')}
                >
                    {reason.explanation}
                    {
                        reason.point === 'The music' &&
                        <p style={{textAlign: 'center'}}>
                            <iframe width="400" height="225" src="https://www.youtube.com/embed/SPa8bPqQfmo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </p>
                    }
                </p>
            }
        </div>
    );

};

export default ReasonToPlay;