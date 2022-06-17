import axios from "axios";

const initialState = {
  episodes: [],
  loading: false,
  error: null,
};

export const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "episodes/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "episodes/load/fulfilled":
      return {
        ...state,
        loading: false,
        episodes: action.payload
      };
    case "episodes/load/rejected":
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case 'characters/decrement/pending':
      return {
        ...state,
        loading: true
      };
    case 'characters/decrement/fulfilled':
      return {
        ...state,
        episodes: state.episodes.map((item) => {
          if(item.episode_id === action.payload) {
            item.characters.length -= 1;
          }
          return item
        }),
        loading: false
      };
    case 'characters/decrement/rejected':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'characters/increment/pending':
      return {
        ...state,
        loading: true
      };
    case 'characters/increment/fulfilled':
      return {
        ...state,
        episodes: state.episodes.map((item) => {
          if(item.episode_id === action.payload) {
            item.characters.length += 1;
          }
          return item
        }),
        loading: false
      };
    case 'characters/increment/rejected':
      return {
        ...state,
        loading:  false,
        error: action.payload
      }
    case 'sort/ebbing/pending':
      return {
        ...state,
        loading: true
      }
    case 'sort/ebbing/fulfilled':
      return {
        ...state,
        episodes: [...state.episodes.sort((a,b) => {
          if(a.characters.length < b.characters.length) {
            return 1;
          } else if(a.characters.length > b.characters.length) {
            return -1;
          }
          return 0
    })],
        loading: false
      };
    case 'sort/advance/pending':
      return {
        ...state,
        loading: true
      };
    case 'sort/advance/fulfilled':
      return {
        ...state,
        episodes: [...state.episodes.sort((a,b) => {
          if(a.characters.length > b.characters.length){
            return 1
          }else if(a.characters.length < b.characters.length){
            return -1
          }
          return 0
        })],
        loading: false
      };
    case 'sort/advance/rejected':
      return {
        loading: false,
        error: action.payload
      }
    case 'sort/ebbing/rejected':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case "episodes/clear/pending":
      return {
        ...state,
        loading: true,
      };
    case "episodes/clear/fulfilled":
      return {
        ...state,
        episodes: [],
        loading: false,
      };
    case "episodes/clear/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "episode/delete/pending":
      return {
        ...state,
        loading: true,
      };
    case "episode/delete/fulfilled":
      return {
        ...state,
        episodes: state.episodes.filter((item) => item.episode_id !== action.payload),
        loading: false,
      };
    case "episode/delete/rejected":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return  state

  }
};

export const sortEbbingCharacters = () => {
  return (dispatch) => {
    dispatch({type:'sort/ebbing/pending'});
    try {
      dispatch({type:'sort/ebbing/fulfilled'});
    }catch (e) {
      dispatch({type:'sort/ebbing/fulfilled', payload: e});
    }
  }
}

export const sortAdvanceCharacters = () => {
  return (dispatch) => {
    dispatch({type: 'sort/advance/pending'});
    try {
      dispatch({type: 'sort/advance/fulfilled'});
    }catch (e){
      dispatch({type: 'sort/advance/rejected', payload: e})
    }
  }
}

export const decrementCharacters = (id) => {
  return (dispatch) => {
    dispatch({type: 'characters/decrement/pending'});
    try{
      dispatch({type: 'characters/decrement/fulfilled', payload: id});
    }catch (e) {
      dispatch({type: 'characters/decrement/rejected', payload: e})
    }
  }
}

export const incrementCharacters  = (id) => {
  return (dispatch) => {
    dispatch({type: 'characters/increment/pending'});
    try {
      dispatch({type: 'characters/increment/fulfilled', payload: id})
    }catch (e) {
      dispatch({type: 'characters/increment/rejected', payload: e})
    }
  }
}

export const deleteEpisode = (id) => {
  return (dispatch) => {
    dispatch({type: "episode/delete/pending"});
    try {
      dispatch({type: "episode/delete/fulfilled", payload: id});
    }catch (e) {
      dispatch({type: "episode/delete/rejected", payload: e})
    }
  }
}

export const loadEpisodes = () => {
  return async (dispatch) => {
    dispatch({ type: "episodes/load/pending" });
    try {
      const { data } = await axios.get(
        "https://breakingbadapi.com/api/episodes"
      );
      dispatch({ type: "episodes/load/fulfilled", payload: data });
      console.log(data)
    } catch (e) {
      dispatch({ type: "episodes/load/rejected", payload: e });
    }
  };
};
