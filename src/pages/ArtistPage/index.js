import React, { useState } from "react";

// import ArtistIndex from "./Components/ArtistIndex";
import { ArtistIndex, SongIndex, SongForm } from "../../Components";
// import SongIndex from "./Components/SongIndex";


const ArtistPage = () => {

    const [artists, setArtists] = useState([
        {name: "Boy Pablo", genre: "Indie", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "./images/feelinglonely.jpg"}, {songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "./images/feelinglonely.jpg"}]},
        {name: "The Magic Gang", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: []},
        {name: "Dutch Criminal Record", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: []},
        {name: "The Amazons", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: []}
    ])


    const renderSongs = (songs) => {
        console.log(songs);
        return songs.map(song => 
        <>
        <SongIndex songName={song.songName} releaseDate={song.releaseDate} coverArt={song.coverArt}/>
        </>
        )
    }
    

    const renderArtists = () => {
        console.log(artists);
        return artists.map(artist => 
        <>
        <ArtistIndex name={artist.name} genre={artist.genre} intro={artist.intro} />
        {renderSongs(artist.songs)}
        <SongForm artist={artist} setArtists={setArtists}/>
        </>
    )
    }

    

    return(
        <>
        {renderArtists()}
        </>
    )
}

export default ArtistPage
