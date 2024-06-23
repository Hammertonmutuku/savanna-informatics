// src/actions/photoActions.js
import axios from "axios";

export const FETCH_PHOTOS_REQUEST = "FETCH_PHOTOS_REQUEST";
export const FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS";
export const FETCH_PHOTOS_FAILURE = "FETCH_PHOTOS_FAILURE";

const unsplashApiKey = "KJVkI2GDdj3sz28UBzEbbOF2leQXx2hF3FaE4Os4pW4";

export const fetchPhotos = () => async (dispatch) => {
  dispatch({ type: FETCH_PHOTOS_REQUEST });
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${unsplashApiKey}`
    );
    dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PHOTOS_FAILURE, error: error.message });
  }
};
