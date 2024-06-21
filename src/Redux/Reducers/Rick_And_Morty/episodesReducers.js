const initialState = {
    episodes: [],
    episode: null,  
    loading:false,
    error: null,
};

const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_EPISODES_REQUEST':
          return {
            ...state,
            loading: true,
          };
        case 'FETCH_EPISODES_SUCCESS':
          return {
            ...state,
            loading: false,
            episodes: action.payload,
          };
        case 'FETCH_EPISODES_FAILURE':
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
          case 'FETCH_EPISODE_REQUEST':
            return {
              ...state,
              loading: true,
            };
          case 'FETCH_EPISODE_SUCCESS':
            return {
              ...state,
              loading: false,
              episode: action.payload,
            };
          case 'FETCH_EPISODE_FAILURE':
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
        default:
          return state;
      }
};



export default episodesReducer;