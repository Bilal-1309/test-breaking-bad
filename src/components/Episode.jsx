import React from 'react';


const Episode = () => {
    return (
        <div className='wrapperEpisodes'>
            <div className='episode'>
                <div className='topH2'>Эпизод №1</div>
                <div className='funcEpisode'>
                    <div className='left'>
                        <div>
                            <button className='plusCharacter'>+</button>
                            1
                            <button className='minusCharacter'>-</button>
                            Персонаж
                        </div>
                    </div>
                    <div className='rightBtnDelete'>
                        <button className='btn-delete'>Удалить</button>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default Episode;