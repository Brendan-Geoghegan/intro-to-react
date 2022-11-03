import React, { useContext } from "react";
import { Link, Outlet } from 'react-router-dom'
import { ArtistContext } from "../../context/ArtistContext";

// import ArtistIndex from "./Components/ArtistIndex";
import { ArtistIndex, SongIndex, SongForm } from "../../Components";
// import SongIndex from "./Components/SongIndex";

import { useSelector } from "react-redux";


const ArtistPage = () => {

    // const [artists, setArtists] = useContext(ArtistContext)
    const artists = useSelector(state => state.artists)


    // const renderSongs = (songs) => {
    //     console.log(songs);
    //     return songs.map(song => 
    //     <>
    //     <SongIndex songName={song.songName} releaseDate={song.releaseDate} coverArt={song.coverArt}/>
    //     </>
    //     )
    // }
    

    // const renderArtists = () => {
    //     console.log(artists);
    //     return artists.map(artist => 
    //     <>
    //     <ArtistIndex name={artist.name} genre={artist.genre} intro={artist.intro} />
    //     {renderSongs(artist.songs)}
    //     <SongForm artist={artist} setArtists={setArtists}/>
    //     </>
    // )
    // }

    const linkArtistNames = () => {
        return artists.map(artist =>
            <>
                <br/>
                <Link to={artist.name}>{artist.name}</Link>
            </>
            )
    }

    

    return(
        <>
        {linkArtistNames()}
        <Outlet/>
        </>
    )
}

export default ArtistPage
