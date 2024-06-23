const initialState = {
  characters: [],
  character: null,
  loading: false,
  error: null,
  pageInfo: {
    currentPage: 1,
    totalPages: 1,
  },
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_CHARACTERS_SUCCESS':
       const nextPageUrl = action.payload.info.next;
       const currentPage = nextPageUrl
         ? parseInt(new URL(nextPageUrl).searchParams.get("page")) - 1
         : state.pageInfo.currentPage;
      return {
        ...state,
        loading: false,
        characters: action.payload,
        pageInfo: {
          currentPage: currentPage,
          totalPages: action.payload.info.pages,
        },
      };
    case 'FETCH_CHARACTERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'FETCH_CHARACTER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_CHARACTER_SUCCESS':
      return {
        ...state,
        loading: false,
        character: action.payload,
      };
    case 'FETCH_CHARACTER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;