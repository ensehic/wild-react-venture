import React, { useState } from 'react';

import classes from './ReasonToPlay.module.css';
import { IReasonToPlay } from '../../types';
import Point from './Point/Point';

const ReasonToPlay = ({reasonNum, point, explanation}: IReasonToPlay) => {
    const [showExplanation, setShowExplanation] = useState(false);

    const pointClickedHandler = () => setShowExplanation(!showExplanation);

    return (
        <div className={classes.reasonToPlay}>
            <Point
                pointClicked={pointClickedHandler}
                reason={{reasonNum, point, explanation}}
                showExplanation={showExplanation}
            />

            {
                explanation &&
                <p
                    className={[
                        classes.reasonContent,
                        classes.explanation,
                        showExplanation && classes.show
                    ].join(' ')}
                >
                    {explanation}
                    {
                        point === 'The music' &&
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