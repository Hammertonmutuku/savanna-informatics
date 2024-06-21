const initialState = {
  characters: [],
  character: null,  
  loading: false,
  error: null,
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARACTERS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_CHARACTERS_SUCCESS':
      return {
        ...state,
        loading: false,
        characters: action.payload,
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