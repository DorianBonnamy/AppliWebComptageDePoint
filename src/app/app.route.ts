import { PATH_PLAYER_LIST, PATH_PLAYER } from './app.route.constantes';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerComponent } from './player/player.component';

export const ROUTES = [
    {path:PATH_PLAYER_LIST, component:PlayerListComponent},
    {path: `${PATH_PLAYER}:idPlayer`, component:PlayerComponent}
]