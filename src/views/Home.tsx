import React from 'react';

import Container from '../components/Container/Container';

const Home = () => (
    <Container>
        <p>Be welcomed in this place!</p>
        <br />
        <h3>...What <em>is</em> this place?</h3>
        <br />
        <p>This is a little personal project made for two reasons:</p>
        <br/>
        <p className={'indented'}>
            1. To finally develop something of my own instead of watching endless guides in React development.
            I&apos;ve been wanting to have something to show for the time spent learning this JavaScript library - aside from the cookie-cutter to-do lists and such.
            Those are all well and good for learning a new technology, of course, but if I am to create something for my &lsquo;portfolio&lsquo;, I want it to be something more personal.
        </p>
        <br/>
        <p className={'indented'}>
            2. To acknowledge a game that has managed to slip under most people&apos;s radar. What seems to contribute to this a lot is the fact that Outer Wilds was released
            in 2019 along with another more prominent game, Outer Worlds. This has caused a lot of people to mistake the two games for one and the same game. What also contributed
            to this lack of exposure is the fact that Outer Wilds was initially an EGS exclusive and was unceremoniously released on Steam in 2020. I myself probably wouldn&apos;t&apos;ve
            found out about the game for a very long time, had my friend not gifted it to me out of the blue. So to whom it may concern, thank you!
        </p>
    </Container>
);

export default Home;