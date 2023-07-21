import React from 'react';
import './SongRow.css';

const SongRow = () => {
    return (
        <>
            <div className="songs-row">
                <div className="song-cover"><img src="src/public/image-placeholder.png" alt="" /></div>
                <div className="song-info-container">
                    <div className="song-name">Waiting For Love</div>
                    <div className="song-artist">Avicci</div>
                </div>
                <div className="song-options">
                    <img src="src/public/right-icon-placeholder.svg" alt="" />
                </div>
            </div>

        </>

    )
}

export default SongRow;