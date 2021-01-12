import React from 'react';
import Particles from 'react-tsparticles';

const StarBackground = () => {

    const options = {
        background: {
            color: {
                value: '#000'
            }
        },
        fpsLimit: 60,
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
        }
    };

    return (
        <Particles
            height={window.outerHeight}
            options={options}
        />
    );
};

export default StarBackground;