import React from 'react';

import classes from './Traveler.module.css';
import { TravelerEnum } from '../../types';
import useWindowDimensions from '../../hooks/WindowDimensions';
import TravelerDescription from '../TravelerDescription/TravelerDescription';
import Image from '../Image/Image';

interface TravelerProps {
    traveler: TravelerEnum,
    travelerSelected: (traveler: TravelerEnum) => void,
    currentTraveler: TravelerEnum | null
}

const Traveler = ({ traveler, travelerSelected, currentTraveler }: TravelerProps) => {

    const [width] = useWindowDimensions();
    const isWideScreen = width >= 1200;

    /**
     * Checks whether or not the given traveler is selected currently.
     */
    const isSelectedTraveler = (): boolean => traveler === currentTraveler;

    const imageClasses = [
        classes.travelerImage,
        isSelectedTraveler() && classes.selectedTraveler
    ];

    return (
        <div className={classes.traveler}>

            {/* Display the traveler's name when they aren't selected */}
            {
                !isSelectedTraveler() &&
                <h1
                    className={classes.travelerName}
                    onClick={() => travelerSelected(traveler)}
                >
                    {traveler}
                </h1>
            }

            <div className={classes.imageWrapper}>
                {
                    <Image
                        filename={`${traveler}.png`}
                        classes={imageClasses.join(' ')}
                        imageClicked={() => travelerSelected(traveler)}
                    />
                }
            </div>

            {/* If screen is less than 1200px wide, show the description of selected traveler below its picture */}
            {
                !isWideScreen && isSelectedTraveler() &&
                    <TravelerDescription traveler={traveler} />
            }
        </div>
    );
};

export default Traveler;