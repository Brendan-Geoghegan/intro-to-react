import React, { useState } from "react";

import ArtistIndex from "./Components/ArtistIndex";
import SongIndex from "./Components/SongIndex";


const App = () => {

    const [artists, setArtists] = useState([
        {name: "Boy Pablo", genre: "Indie", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "./images/feelinglonely.jpg"}, {songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "./images/feelinglonely.jpg"}]},
        {name: "The Magic Gang", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: []},
        {name: "Dutch Criminal Record", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: []},
        {name: "The Amazons", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: []}
    ])

    const createSong = (e) => {
        console.log(e.target.songName)
        artists.push({
            name: e.songName,
            songs: []
        })
    }

    const renderSongs = (songs) => songs.map(song => 
        <>
        <SongIndex songName={song.songName} releaseDate={song.releaseDate} coverArt={song.coverArt}/>
        </>
        )

    const renderArtists = () => artists.map(artist => 
        <>
        <ArtistIndex name={artist.name} genre={artist.genre} intro={artist.intro} />
        {renderSongs(artist.songs)}
        <form onSubmit={(e) => {
        e.preventDefault()
        createSong(e)
        }}>
        <input type="text" placeholder="Song name" name="songName"></input>
        <input type="text" placeholder="Release date"></input>
        <input type="submit"></input>
        </form>
        </>
    )

    

    return(
        <>
        {renderArtists()}
        </>
    )
}

export default App
