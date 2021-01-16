import React from 'react';

import classes from './Traveler.module.css';
import { TravelerEnum } from '../../types';
import travelerDescriptions from './travelerDescriptions.json';
import useWindowDimensions from '../../hooks/WindowDimensions';

interface TravelerProps {
    traveler: TravelerEnum,
    imageSource: string,
    travelerSelected: (traveler: TravelerEnum) => void,
    currentTraveler: TravelerEnum | null
}

const Traveler = (props: TravelerProps) => {
    const [width] = useWindowDimensions();
    const isWideScreen = width >= 1200;

    return (
        <div className={classes.traveler} onClick={() => props.travelerSelected(props.traveler)}>
            {
                props.currentTraveler === props.traveler ?
                    null:
                    <h1 className={classes.travelerName}>{props.traveler}</h1>
            }
            <img src={props.imageSource} className={classes.travelerImage} alt={props.traveler} />

            {/* If screen is less than 1200px wide, show the description of selected traveler below its picture */}
            {
                !isWideScreen && props.currentTraveler &&
                props.currentTraveler === props.traveler &&
                    <p className={classes.travelerDescription}>
                        {travelerDescriptions[props.traveler]}
                    </p>
            }
        </div>
    );
};

export default Traveler;