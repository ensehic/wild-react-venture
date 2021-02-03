import Home from '../views/Home';
import ReasonsToPlay from '../views/ReasonsToPlay';
import TheWorld from '../views/TheWorld/TheWorld';
import Travelers from '../views/Travelers/Travelers';
import { IAppRoute } from '../types';

const routes: IAppRoute[] = [
    {path: '/', name: 'Home', View: Home},
    {path: '/reasons-to-play', name: '10 Reasons to Play', View: ReasonsToPlay},
    {path: '/the-world', name: 'The World of Outer Wilds', View: TheWorld},
    {path: '/travelers', name: 'Travelers', View: Travelers}
];

export default routes;