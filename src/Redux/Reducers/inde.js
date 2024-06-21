import { combineReducers } from 'redux';
import charactersReducer from './Rick_And_Morty/charactersReducers';
 import episodesReducer from './Rick_And_Morty/episodesReducers';

const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
});

export default rootReducer;
