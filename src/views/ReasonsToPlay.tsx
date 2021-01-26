import React from 'react';

import Container from '../components/Container/Container';
import ReasonToPlay from '../components/ReasonToPlay/ReasonToPlay';
import Spacer from '../components/Spacer/Spacer';

const ReasonsToPlay = () => {

    const reasons = [
        {'point': 'It is a finite experience', 'explanation': 'Many games (including single player ones) these days strive to be live services that expect the player to play (and spend money on) infinitely. More often than not these games are uninspired and lack any compelling gameplay and story. Outer Wilds attempts no such nonsense, but instead provides a memorable 15-25 hour experience with a clear starting and ending point. There is, honestly, no point in replaying the game, but you\'ll notice it does stick around in your thoughts well after you\'ve finished it.'},
        {'point': 'No handholding', 'explanation': 'The game does little to nothing to tell you what to do in order to progress. You do have a ship log that keeps track of all your discoveries, but that\'s basically it. It\'s up to you to figure out where to go and what to do. In a game where exploration is the bread and butter of the experience I would say it\'s great that you can get lost along the way and come across things that you would probably miss if you had a minimap showing you the objective and the exact path you need to take to get there. This pretty much ensures that no two people\'s playthroughs are going to be the exact same.'},
        {'point': 'The music', 'explanation': 'The music in Outer Wilds is just fantastic. There\'s not much else to say. It simply hits all the right beats at all the right moments and enhances every step of the journey. Give it a listen: '},
        {'point': 'The world doesn\'t care about you', 'explanation': 'That sounds hurtful, doesn\'t it? What I mean by this is that things will happen whether you\'re there to observe them or not. It makes the world of Outer Wilds feel all the more alive and brings a kind of rhythm to the game. To me this is a refreshing change of pace in a world full of games where nothing really happens without the player being the cause.'},
        {'point': 'The physics', 'explanation': 'I\'m not going to pretend to know how a physics engine is developed. I will simply say that it is obvious that a lot of thought and effort has been put into Outer Wilds\' physics. If you want, you can orbit around a planet without your spaceship, acting like a Hearthian satellite, arms and legs flailing. That is all.'},
        {'point': 'It\'s a giant puzzle', 'explanation': 'No matter what planet you decide to venture to first, you will start off by coming across bits of information that seem completely unrelated. As you discover more and more things, you start connecting those bits of information and you start seeing the bigger picture. It is like piecing together a jigsaw puzzle, except you don\'t know what the puzzle is going to look like from the outset.'},
        {'point': 'Nothing is redundant', 'explanation': 'While some games contain 18 quintillion planets, Outer Wilds contents itself with a handful. This presents an advantage. In Outer Wilds you will never get the feeling that you\'ve seen a given location elsewhere, and everything that does exist in the game, exists for a reason.'},
        {'point': 'The autopilot', 'explanation': 'If you don\'t feel like flying your ship manually and overshooting your destination for the 100th time, just lock onto your destination and turn the autopilot on. The autopilot is guaranteed to take you safely from point A to point B. 60 % of the time it works every time.'},
        {'point': 'The characters', 'explanation': 'When you spend a couple dozen hours finding out about a civilization\'s mission, you\'re bound to get invested in their cause and the characters themselves. Fortunately both the Nomai and your fellow Hearthians are sympathetic characters. By the end of it you\'ll be glad you took a moment to roast some marshmallows with them.'},
        {'point': 'Proper space exploration', 'explanation': 'Throughout playing Outer Wilds, I felt like it communicated the feeling of space exploration exceptionally well. It offers moments of awe and hope but also of uncertainty and even dread. Aside from that, your objective is to go out to space and solve a mystery. Isn\'t that exactly what exploration is all about? Stumbling around in the unknown and making it known?'},
        {'point': 'Did I mention the music?'},
    ];

    return (
        <>
            <Container>
                Here&apos;s a small list of things that in my opinion speak in favor of picking up Outer Wilds. This is all very subjective,
                so obviously it&apos;s unlikely anybody will find every single one of these points agreeable. If you aren&apos;t convinced
                after looking through the list, then maybe Outer Wilds just isn&apos;t a game you will enjoy. On the other hand I personally
                know a person that tried the game, refunded it, then soon bought it again and ended up playing through it and enjoying it
                immensely. So I encourage those on the fence to give Outer Wilds a shot, since you&apos;re guaranteed to get a refund if
                your playtime is under 2 hours (on Steam at least). Two hours should be enough time to get a sense of whether you will enjoy
                the game or not.
                <br/><br/>
                <h4>But anyway, 10 reasons to play Outer Wilds:</h4>
            </Container>

            <Spacer height='5vh' />

            <Container>
                {
                    reasons.map((reason, index) => (
                        <React.Fragment key={reason.point}>
                            <ReasonToPlay
                                reasonNum={index+1}
                                point={reason.point}
                                explanation={reason.explanation}
                            />
                        </React.Fragment>
                    ))
                }
            </Container>
        </>
    );
};

export default ReasonsToPlay;