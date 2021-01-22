import React from 'react';

import Container from '../../components/Container/Container';
import classes from './TheWorld.module.css';
import Image from '../../components/Image/Image';
import Spacer from '../../components/Spacer/Spacer';

const TheWorld = () => (
    <>
        <Container>
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
                you will run into Nomai architecture. Their settlements in particular show just how willing and able the Nomai were to adapt, as each planet offered their own challenges
                in terms of habitability. As you traverse the world you will learn how the Nomai thought, what they wished to achieve and to what lengths they were willing to go, to reach
                their goals. You will of course also find out exactly what happened to them.
            </p>
        </Container>
        <Spacer height="5vh" />
        <Container>
            <div className={classes.contentDiv}>
                <p className={classes.text}>
                    You wake up in a clearing. The vastness of space is staring right down at you. You see an explosion out in space. What happened?
                    Who knows. You rise to your feet from your sleeping bag. A campfire crackles beside you. Slate is already up and roasting marshmallows.
                    As is customary for the astronauts of Outer Wilds Ventures, you&apos;ve camped under the stars with Slate the night before your first
                    launch into space. There&apos;s excitement in the air. Slate tells you the last thing you need to do before you can launch is to get
                    the launch codes from Hornfels in your village&apos;s observatory.
                </p>
                <div className={classes.imageWrapper}>
                    <Image filename='campfire.png' classes={classes.icon} />
                </div>
            </div>
            <div className={classes.contentDiv}>
                <div className={classes.imageWrapper}>
                    <Image filename='observatory.png' classes={classes.icon} />
                </div>
                <p className={classes.text}>
                    As you make your way through the village, you meet other Hearthians
                    who are excited to see you go <small>(thanks, I guess)</small>. Upon arrival to the observatory, the first thing you see is a very mysterious Nomai statue.
                    Others are there observing it, puzzled. You move along and enter a museum, full of Nomai artifacts and other exhibitions. The Hearthians clearly
                    have a fascination with the ancient civilization of the Nomai, that has long since disappeared. Better take a look around the museum.
                </p>
            </div>
            <div className={classes.contentDiv}>
                <p className={classes.text}>
                    After checking out the museum, you finally go upstairs into the observatory and meet Hornfels. They&apos;re curious about what you intend to do
                    once you embark on your journey. Are you going straight for the deep end and try to learn about the Nomai? Are you going to start small? Maybe
                    look for other members of Outer Wilds Ventures? Whatever your plans, Hornfels doesn&apos;t want to delay you any more than they need to, so they give
                    you the launch codes. After that it&apos;s a short walk to the launch pad, and you are ready to blast off. Upon entering your ship you suit up,
                    look around and notice some instructional illustrations on the ship&apos;s walls. You ignore them – there will be time to check them out <em>after </em>
                    launching. You buckle up, power up the thrusters, finally lift off the launch pad, and in a few seconds you leave Timber Hearth&apos;s atmosphere. Silence all around.
                    What happens next is completely up to you.
                </p>
                <div className={classes.imageWrapper}>
                    <Image filename='spaceship.png' classes={classes.icon} />
                </div>
            </div>
        </Container>
    </>
);

export default TheWorld;