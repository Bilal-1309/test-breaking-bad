import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadEpisodes} from "../redux/features/episodes";

const LoadEpisodes = () => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading)

  const fetchEpisodes = () => {
    dispatch(loadEpisodes());
  };


  return (
      !loading ? (
        <div className="loadingEpisode">
            <button className="btnLoadingEpisode" onClick={fetchEpisodes}>
                Загрузить эпизоды
            </button>
        </div>
    ) : (
        <div>
            <h2>Идет загрузка эпизодов...</h2>
        </div>
    )
  );
};

export default LoadEpisodes;
