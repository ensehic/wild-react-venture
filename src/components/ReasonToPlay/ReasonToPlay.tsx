import React, { useState } from 'react';

import classes from './ReasonToPlay.module.css';
import { IReasonToPlay } from '../../types';
import Point from './Point/Point';
import Explanation from './Explanation/Explanation';

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
                (showExplanation && explanation) &&
                    <Explanation point={point} explanation={explanation} />
            }
        </div>
    );

};

export default ReasonToPlay;