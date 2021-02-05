import React from 'react';

import Container from '../components/Container/Container';
import Spacer from '../components/Spacer/Spacer';
import classes from './Home.module.css';

const Home = () => (
    <>
        <Container defaultBackground>
            <p>Be welcomed in this place!</p>
        </Container>
        <Spacer height='5vh' />
        <Container classNameProp={classes.homeMainContent}>
            <Container classNameProp={`${classes.homeSubContent} ${classes.intro}`} defaultBackground>
                <h3>...What <em>is</em> this place?</h3>
                <br />
                <p>This is a little personal project made for two reasons:</p>
                <br/>
                <p className={'indented'}>
                    1. To finally create something of my own with React.js instead of watching endless guides in React development.
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
            <Spacer height='5vh' />
            <Container classNameProp={`${classes.homeSubContent} ${classes.whatIs}`} defaultBackground>
                <h3>What is Outer Wilds?</h3>
                <br/>
                <p>
                    Simply put, Outer Wilds is a game about space exploration and solving a mystery. You do this by visiting a handful of planets aboard your spaceship, exploring those planets
                    and following in the footsteps of the Nomai, an ancient alien race. Your main resource in the game is your knowledge about the world. You can think of it as a metroidvania
                    where the driving force of progression is knowledge instead of item upgrades and new abilities.
                </p>
            </Container>
            <Container classNameProp={`${classes.homeSubContent} ${classes.beforeYouMove}`} defaultBackground>
                <h3>Before you move on...</h3>
                <br/>
                <p>
                    Somebody has aptly described Outer Wilds as the best game you&apos;re not allowed to talk about. This is quite appropriate, because knowing as little as possible about the
                    game beforehand is the best way to experience it. For that reason I will try to discuss Outer Wilds as vaguely as possible on this site. One might think that it defeats
                    the whole purpose of the site, but let us just agree that you can acknowledge a game without spoiling every little detail of it. Some spoilers are inevitable (mostly on
                    the Travelers page), but I&apos;ve done my best to avoid anything major. The last thing I would want to do is ruin it for any potential players.
                </p>
            </Container>
        </Container>
    </>
);

export default Home;