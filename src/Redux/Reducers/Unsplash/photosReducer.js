const initialState = {
  loading: false,
  photos: [],
  error: "",
};

const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PHOTOS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_PHOTOS_SUCCESS":
      return {
        loading: false,
        photos: action.payload,
        error: "",
      };
    case "FETCH_PHOTOS_FAILURE":
      return {
        loading: false,
        photos: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default PhotoReducer;