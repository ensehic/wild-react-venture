import React from 'react';

import Container from '../../components/Container/Container';
import classes from './TheWorld.module.css';
import Image from '../../components/Image/Image';

const TheWorld = () => (
    <>
        <Container defaultBackground>
            <div className={classes.contentWrapper}>
                <div className={classes.textWrapper}>
                    <p>
                        The world of Outer Wilds isn&apos;t very big, but it is incredibly dense. It consists of five planets and a handful of minor astral bodies like moons and a comet.
                        Present too are several structures from the times of the Nomai that attest to the technologic and scientific advancement of the now gone race. All this doesn&apos;t
                        sound like much, but you can spend a couple hours on a planet you can walk around in about a minute and still not find everything there is to discover on said planet.
                        Each planet is also completely unique and has its own story to tell. These stories are of course interconnected, although this isn&apos;t obvious to the player from the
                        get-go.
                    </p>
                    <br/>
                    <p>
                        The Nomai are front and center in the game. While they are long gone, their presence can be felt in every corner of the world. They inhabited most of the planets, so
                        you will run into Nomai constructions. Their settlements in particular show just how willing and able the Nomai were to adapt, as each planet offered its own challenges
                        in terms of habitability. As you traverse the world you will learn how the Nomai thought, what they wished to achieve and to what lengths they were willing to go, to reach
                        their goals. You will of course also find out exactly what happened to them.
                    </p>
                </div>
                <div className={classes.imageWrapper}>
                    <Image filename='spaceship.png' classes={classes.icon} />
                </div>
            </div>
        </Container>
    </>
);

export default TheWorld;