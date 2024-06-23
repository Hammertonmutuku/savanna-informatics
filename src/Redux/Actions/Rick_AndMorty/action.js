import axios from "axios";

export const fetchCharacters =
  (page = 1) =>
  async (dispatch) => {
    dispatch({ type: "FETCH_CHARACTERS_REQUEST" });
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      dispatch({ type: "FETCH_CHARACTERS_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_CHARACTERS_FAILURE", payload: error.message });
    }
  };

export const fetchCharacter = (id) => async (dispatch) => {
  dispatch({ type: "FETCH_CHARACTER_REQUEST" });
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    dispatch({ type: "FETCH_CHARACTER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_CHARACTER_FAILURE", payload: error.message });
  }
};

export const fetchEpisodes =
  (page = 1) =>
  async (dispatch) => {
    dispatch({ type: "FETCH_EPISODES_REQUEST" });
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/episode/?page=${page}`
      );
      dispatch({ type: "FETCH_EPISODES_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_EPISODES_FAILURE", payload: error.message });
    }
  };

export const fetchEpisode = (id) => async (dispatch) => {
  dispatch({ type: "FETCH_EPISODES_REQUEST" });
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    dispatch({ type: "FETCHE_PISODES_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_EPISODES_FAILURE", payload: error.message });
  }
};
