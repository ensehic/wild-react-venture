import React, {useRef, useLayoutEffect, useState} from 'react';

import classes from './Explanation.module.css';

interface ExplanationProps {
    explanation: string,
    isExpanded: boolean
}

const Explanation = ({explanation, isExpanded}: ExplanationProps) => {
    const elementRef = useRef<HTMLParagraphElement>(null);

    // Use state to control the p element's height.
    const [explanationHeight, setExplanationHeight] = useState(0);

    /**
     * Instead of giving the p element bottom padding through css, do it here,
     * because the same value will be used to pad its height.
     */
    const paddingBottom = 25;

    useLayoutEffect(() => {
        if (elementRef.current) {
            isExpanded ?
                setExplanationHeight(elementRef.current.scrollHeight + paddingBottom) :
                setExplanationHeight(0);
        }
    }, [isExpanded]);

    return (
        <p
            ref={elementRef}
            className={classes.explanation}
            style={{height: `${explanationHeight}px`}}
        >
            {explanation}
        </p>
    );
};

export default Explanation;