import React, { useState } from "react";

const SongIndex = ({songName, releaseDate, coverArt}) => {

    const [like, setLike] = useState("Like");
    const [color, setColor] = useState("black")

    const likeOrUnlike = () => {
        setLike(prev => prev == "Like" ? "Liked" : "Like")
        setColor(prev => prev == "black" ? "blue" : "black")
    }

    const createSong = (e) => {
        songName.push()
    }

return(
    <>
    <h2>Song: {songName}</h2>
    <p role="figure">Release date: {releaseDate}</p>
    <img src={coverArt} alt={songName}/>
    <button style={{color: color}} onClick={() => likeOrUnlike()}>{like}</button>
    </>
)
}

export default SongIndex
