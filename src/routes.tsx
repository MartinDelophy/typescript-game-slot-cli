import Game from './Game_one/Game';
const routes = [
    {
        component: Game,
        routes: [
            // {
            //     path: '/',
            //     exact: true,
            //     component: '<div>123<div>'
            // },
            {
                path: '/about',
                component: Game
            },
        ]
    }
];

export default routes;