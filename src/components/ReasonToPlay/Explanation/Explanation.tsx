import React from 'react';

import classes from './Explanation.module.css';
import parentClasses from '../ReasonToPlay.module.css';
import { IReasonToPlay } from '../../../types';

type ExplanationProps = Omit<IReasonToPlay, 'reasonNum'>;

const Explanation = ({point, explanation}: ExplanationProps) => {
    return (
        <p
            className={[
                parentClasses.reasonContent,
                classes.explanation,
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
    );
};

export default Explanation;