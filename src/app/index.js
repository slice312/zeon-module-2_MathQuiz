import {State} from "../state";

if (!State.playerName && window.AppState)
    State.playerName = window.AppState.playerName;
// для отладки
window.AppState = State;