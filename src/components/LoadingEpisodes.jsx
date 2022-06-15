import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {episodesReducer, loadEpisodes} from "../redux/features/episodes";

const LoadEpisodes = () => {

    const dispatch = useDispatch();

  const fetchEpisodes = () => {
    dispatch(loadEpisodes());
  };


  return (
    <div className="loadingEpisode">
      <button className="btn-loadingEpisode" onClick={fetchEpisodes}>
        Загрузить эпизоды
      </button>
    </div>
  );
};

export default LoadEpisodes;
