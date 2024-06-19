import axios from 'axios';

export const fetchCharacters = () => async dispatch => {
  dispatch({ type: 'FETCH_CHARACTERS_REQUEST' });
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    dispatch({ type: 'FETCH_CHARACTERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_CHARACTERS_FAILURE', payload: error.message });
  }
};

export const fetchCharacter = (id) => async dispatch => {
  dispatch({ type: 'FETCH_CHARACTERS_REQUEST' });
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    dispatch({ type: 'FETCH_CHARACTERS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_CHARACTERS_FAILURE', payload: error.message });
  }
};

export const fetchMultipleCharacters = (id, userData) => async dispatch => {
//   dispatch({ type: 'EDIT_USER_REQUEST' });
//   try {
//     const response = await axios.patch(`https://lionfish-app-qkntx.ondigitalocean.app/api/user/${id}`, userData);
//     dispatch({ type: 'EDIT_USER_SUCCESS', payload: response.data });
//   } catch (error) {
//     dispatch({ type: 'EDIT_USER_FAILURE', payload: error.message });
//   }
};

export const fetchEpisodes = () => async dispatch => {
    dispatch({ type: 'FETCH_EPISODES_REQUEST' });
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/episode');
      dispatch({ type: 'FETCH_EPISODES_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_EPISODES_FAILURE', payload: error.message });
    }
  };

  export const fetchEpisode = (id) => async dispatch => {
    dispatch({ type: 'FETCH_EPISODES_REQUEST' });
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      dispatch({ type: 'FETCHE_PISODES_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_EPISODES_FAILURE', payload: error.message });
    }
  };

