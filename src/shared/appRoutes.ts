import Home from '../views/Home';
import ReasonsToPlay from '../views/ReasonsToPlay';
import TheWorld from '../views/TheWorld/TheWorld';
import Travelers from '../views/Travelers/Travelers';

const routes = [
    {path: '/', name: 'Home', View: Home},
    {path: '/reasons-to-play', name: 'ReasonsToPlay', View: ReasonsToPlay},
    {path: '/the-world', name: 'TheWorld', View: TheWorld},
    {path: '/travelers', name: 'Travelers', View: Travelers}
];

export default routes;