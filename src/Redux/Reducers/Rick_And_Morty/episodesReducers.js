const initialState = {
  episodes: [],
  episode: null,
  loading: false,
  error: null,
  pageInfo: {
    currentPage: 1,
    totalPages: 1,
  },
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EPISODES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_EPISODES_SUCCESS":
      const nextPageUrl = action.payload.info.next;
      const currentPage = nextPageUrl
        ? parseInt(new URL(nextPageUrl).searchParams.get("page")) - 1
        : state.pageInfo.currentPage;
      return {
        ...state,
        loading: false,
        episodes: action.payload,
        pageInfo: {
          currentPage: currentPage,
          totalPages: action.payload.info.pages,
        },
      };
    case "FETCH_EPISODES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "FETCH_EPISODE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_EPISODE_SUCCESS":
      return {
        ...state,
        loading: false,
        episode: action.payload,
      };
    case "FETCH_EPISODE_FAILURE":
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
