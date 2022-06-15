import axios from "axios";

const initialState = {
  episodes: [],
  loading: true,
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
      };
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
        episodes: state.episodes.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case "episode/delete/rejected":
      return {
        ...state,
        error: action.payload,
      };
  }
};

export const loadEpisodes = () => {
  return async (dispatch) => {
    dispatch({ type: "episodes/load/pending" });
    try {
      const { data } = await axios.get(
        "https://breakingbadapi.com/api/episodes"
      );
      dispatch({ type: "episodes/load/fulfilled", payload: data });
    } catch (e) {
      dispatch({ type: "episodes/load/rejected", payload: e });
    }
  };
};
