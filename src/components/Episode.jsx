import React from 'react';
import {decrementCharacters, deleteEpisode, incrementCharacters} from "../redux/features/episodes";
import {useDispatch} from "react-redux";

const Episode = ({episode}) => {

    const dispatch = useDispatch();

    const wordCharacter = (char) => {
        if( char === 0) {
            return'Персонажей';
        } else if (char === 1) {
            return 'Персонаж';
        } else if(char === 2 || char ===  3 || char ===
            4) {
            return 'Персонажа';
        } else if(char >= 5) {
            return 'Персонажей'

        }
    };

    const handleDeleteEpisode = (id) => {
        dispatch(deleteEpisode(id))
    }

    const handleDecrementCharacters = (id) => {
        dispatch(decrementCharacters(id))
    }

    const handleIncrementCharacters = (id) => {
        dispatch(incrementCharacters(id))
    }

    return (
        <>
            <div className='episode'>
                <div className='topH2'>Эпизод {episode.episode_id}</div>
                <div className='funcEpisode'>
                    <div className='left'>
                        <div>
                            <button onClick={() => handleIncrementCharacters(episode.episode_id)} className='plusCharacter'>+</button>
                            {episode.characters.length}
                            <button onClick={() => handleDecrementCharacters(episode.episode_id)} className='minusCharacter'>-</button>
                            <span>{wordCharacter(episode.characters.length)}</span>
                        </div>
                    </div>
                    <div className='rightBtnDelete'>
                        <button onClick={() => handleDeleteEpisode(episode.episode_id)} className='btnDelete'>Удалить</button>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    );
};

export default Episode;