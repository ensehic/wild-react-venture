import React from 'react';

interface SpacerProps {
    width?: string
    height?: string
}

const Spacer = (props: SpacerProps) => (
    <div style={{width: `${props.width}`, height: `${props.height}`}}>
        &nbsp;
    </div>
);

export default Spacer;