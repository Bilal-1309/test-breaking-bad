import React from 'react';
import Episode from "./Episode";
import {useSelector} from "react-redux";

const EpisodesList = () => {

    const episodes = useSelector(state => state.episodes);

    return (
        <div className='wrapperEpisodes'>
            {
                episodes.map((item) => (
                    <Episode key={item.episode_id} episode={item} />
                ))
            }
        </div>
    );
};

export default EpisodesList;