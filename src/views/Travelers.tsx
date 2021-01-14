import React from 'react';

import Container from '../components/Container/Container';
import Spacer from '../components/Spacer/Spacer';
import classes from './Travelers.module.css';

const Travelers = () => {
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
                    <div className={classes.gridCell}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore obcaecati, est autem, neque possimus fuga voluptates sunt quas quasi voluptas sint adipisci omnis. Quis veniam fugit quidem neque iusto.</div>
                    <div className={classes.gridCell}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore obcaecati, est autem, neque possimus fuga voluptates sunt quas quasi voluptas sint adipisci omnis. Quis veniam fugit quidem neque iusto.</div>
                    <div className={classes.gridCell}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore obcaecati, est autem, neque possimus fuga voluptates sunt quas quasi voluptas sint adipisci omnis. Quis veniam fugit quidem neque iusto.</div>
                    <div className={classes.gridCell}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore obcaecati, est autem, neque possimus fuga voluptates sunt quas quasi voluptas sint adipisci omnis. Quis veniam fugit quidem neque iusto.</div>
                </div>
            </Container>
        </>
    );
};

export default Travelers;