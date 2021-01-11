import React from 'react';
import Particles from 'react-tsparticles';

import classes from './StarBackground.module.css';

const StarBackground = () => {
    return (
        <Particles
            id="tsparticles"
            className={classes.starbackground}
            height="100vh"
            width="100vw"
            options={{
                background: {
                    color: '#000'
                },
                particles: {
                    color: {
                        value:'#fff'
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 100
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 0.25,
                            sync: false
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05
                        },
                        value: 1
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 0.5
                        },
                        value: 2
                    }
                },
            }}
        />
    );
};

export default StarBackground;