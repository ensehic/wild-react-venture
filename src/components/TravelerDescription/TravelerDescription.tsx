import React from 'react';

import classes from './TravelerDescription.module.css';
import { TravelerEnum } from '../../types';
import travelerDescriptions from './travelerDescriptions.json';

interface TravelerDescriptionProps {
    traveler: TravelerEnum
}

const TravelerDescription = ({traveler}: TravelerDescriptionProps) => (
    <div className={classes.travelerDescription}>
        <p>{travelerDescriptions[traveler]}</p>
    </div>
);

export default TravelerDescription;