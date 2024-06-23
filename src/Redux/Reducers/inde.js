import { combineReducers } from 'redux';
import charactersReducer from './Rick_And_Morty/charactersReducers';
 import episodesReducer from './Rick_And_Morty/episodesReducers';
import PhotoReducer from './Unsplash/photosReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  photos: PhotoReducer,
});

export default rootReducer;
