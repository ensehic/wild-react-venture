import React from 'react';

import Container from '../components/Container/Container';

const Home = () => (
    <Container>
        <p>Be welcomed in this place!</p>
        <br />
        <h3>...What <em>is</em> this place?</h3>
        <br />
        <p>This is a little personal project made for two reasons:</p>
        <p className={'indented'}>
            1. To finally develop something of my own instead of watching endless guides in React development.
            I&apos;ve been feeling anxious about not having anything to show for the time spent learning this JavaScript library - except of course the cookie-cutter to-do lists and such.
            Those are all well and good for learning a new technology, of course, but if I am to create something for my &lsquo;portfolio&lsquo;, I want it to be something more personal.
        </p>
        <p className={'indented'}>
            2. To acknowledge a game that really doesn&lsquo;t seem to get enough recognition online. What seems to contribute to this a lot is the fact that Outer Wilds was released
            in the same year as another, more talked about game, Outer Worlds.
        </p>
    </Container>
);

export default Home;