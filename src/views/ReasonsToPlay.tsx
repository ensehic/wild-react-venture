import React from 'react';

import Container from '../components/Container/Container';
import ReasonToPlay from '../components/ReasonToPlay/ReasonToPlay';
import Spacer from '../components/Spacer/Spacer';
import reasonsToPlay from '../components/ReasonToPlay/reasons';

const ReasonsToPlay = () => {

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
                    reasonsToPlay.map((reason, index) => (
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