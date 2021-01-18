import React, { useEffect, useState } from 'react';

import classes from './Traveler.module.css';
import { TravelerEnum } from '../../types';
import travelerDescriptions from './travelerDescriptions.json';
import useWindowDimensions from '../../hooks/WindowDimensions';

interface TravelerProps {
    traveler: TravelerEnum,
    travelerSelected: (traveler: TravelerEnum) => void,
    currentTraveler: TravelerEnum | null
}

const Traveler = (props: TravelerProps) => {
    const { traveler, travelerSelected, currentTraveler } = props;
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
    });

    const imageClasses = [
        classes.travelerImage,
        traveler === currentTraveler ? classes.selectedTraveler : null
    ];

    return (
        <div className={classes.traveler} onClick={() => travelerSelected(traveler)}>
            <div className={classes.imageWrapper}>
                {
                    imageSource &&
                    <img src={imageSource} className={imageClasses.join(' ')} alt={traveler} />
                }
            </div>

            {
                currentTraveler !== traveler &&
                    <h1 className={classes.travelerName}>{traveler}</h1>
            }

            {/* If screen is less than 1200px wide, show the description of selected traveler below its picture */}
            {
                !isWideScreen && currentTraveler &&
                currentTraveler === traveler &&
                    <p className={classes.travelerDescription}>
                        {travelerDescriptions[traveler]}
                    </p>
            }
        </div>
    );
};

export default Traveler;