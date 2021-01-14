import React, { useState } from 'react';

import Container from '../components/Container/Container';
import Spacer from '../components/Spacer/Spacer';
import classes from './Travelers.module.css';
import eskerImg from '../assets/images/esker.png';
import placeholderImg from '../assets/images/placeholder.png';
import Traveler from '../components/Traveler/Traveler';
import { TravelerEnum } from '../types';


const Travelers = () => {
    const [currentTraveler, setCurrentTraveler] = useState<TravelerEnum | null>(null);

    const handleTravelerSelection = (selectedTraveler: TravelerEnum): void => {

        // Deselect traveler if the already selected traveler was selected again.
        if (selectedTraveler === currentTraveler) {
            setCurrentTraveler(null);
            return;
        }
        setCurrentTraveler(selectedTraveler);
    };

    return (
        <>
            <Container>
                <p>
                    As you traverse the star system, you&apos;ll likely run into other other members of Outer Wilds Ventures. These encounters are moments
                    of calm amidst all the chaos of your exploration of the system, so do take the opportunity to relax a bit. Sit by the campires, roast some marshmallows
                    and have conversations with your fellow Hearthians. They&apos;re always interested in your discoveries throughout the solar system, but they&apos;re also
                    happy enough to share their own findings and experiences with you.
                </p>
            </Container>
            <Spacer width="100%" height="5vh" />
            <Container>
                <div className={classes.travelersGrid}>
                    <Traveler
                        traveler={TravelerEnum.esker}
                        imageSource={eskerImg}
                        travelerSelected={handleTravelerSelection}
                        currentTraveler={currentTraveler}
                    />
                    <Traveler
                        traveler={TravelerEnum.gabbro}
                        imageSource={placeholderImg}
                        travelerSelected={handleTravelerSelection}
                        currentTraveler={currentTraveler}
                    />
                    <Traveler
                        traveler={TravelerEnum.riebeck}
                        imageSource={placeholderImg}
                        travelerSelected={handleTravelerSelection}
                        currentTraveler={currentTraveler}
                    />
                    <Traveler
                        traveler={TravelerEnum.chert}
                        imageSource={placeholderImg}
                        travelerSelected={handleTravelerSelection}
                        currentTraveler={currentTraveler}
                    />
                    <Traveler
                        traveler={TravelerEnum.feldspar}
                        imageSource={placeholderImg}
                        travelerSelected={handleTravelerSelection}
                        currentTraveler={currentTraveler}
                    />
                </div>
            </Container>
        </>
    );
};

export default Travelers;