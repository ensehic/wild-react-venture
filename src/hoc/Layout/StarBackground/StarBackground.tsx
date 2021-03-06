import React from 'react';
import Particles, { ISourceOptions } from 'react-tsparticles';

import particlesOptions from './particles.json';

const StarBackground = () => (
    <Particles options={particlesOptions as ISourceOptions} />
);

export default StarBackground;