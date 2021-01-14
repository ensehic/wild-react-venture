import React from 'react';

import classes from './Traveler.module.css';
import { TravelerEnum } from '../../types';
import travelerDescriptions from './travelerDescriptions.json';


interface TravelerProps {
    traveler: TravelerEnum,
    imageSource: string,
    travelerSelected: (traveler: TravelerEnum) => void,
    currentTraveler: TravelerEnum | null
}

const Traveler = (props: TravelerProps) => {
    return (
        <div className={classes.gridCell} onClick={() => props.travelerSelected(props.traveler)}>
            {
                props.currentTraveler === props.traveler ?
                    null:
                    <h1 className={classes.travelerTitle}>{props.traveler}</h1>
            }
            <img src={props.imageSource} className={classes.travelerImage} alt="Placeholder"/>
            {
                props.currentTraveler === props.traveler ?
                    <p className={classes.travelerDescription}>
                        {travelerDescriptions[props.traveler]}
                    </p> :
                    null
            }
        </div>
    );
};

export default Traveler;