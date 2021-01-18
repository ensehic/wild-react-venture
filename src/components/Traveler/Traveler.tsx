import React, { useEffect, useState } from 'react';

import classes from './Traveler.module.css';
import { TravelerEnum } from '../../types';
import useWindowDimensions from '../../hooks/WindowDimensions';
import TravelerDescription from '../TravelerDescription/TravelerDescription';

interface TravelerProps {
    traveler: TravelerEnum,
    travelerSelected: (traveler: TravelerEnum) => void,
    currentTraveler: TravelerEnum | null
}

const Traveler = ({ traveler, travelerSelected, currentTraveler }: TravelerProps) => {

    const [width] = useWindowDimensions();
    const isWideScreen = width >= 1200;
    const [imageSource, setImageSource] = useState(undefined);

    /**
     * Dynamically imports the image for the given traveler.
     * Returns the path to the image on success, undefined on error.
     * @param traveler Traveler name
     */
    const getTravelerImage = (traveler: TravelerEnum) => {
        import(`../../assets/images/${traveler}.png`)
            .then(res => setImageSource(res.default))
            .catch(() => undefined);
    };

    useEffect(() => {
        getTravelerImage(traveler);
    }, []);

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
                    imageSource &&
                    <img
                        src={imageSource}
                        className={imageClasses.join(' ')}
                        alt={traveler}
                        onClick={() => travelerSelected(traveler)}
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