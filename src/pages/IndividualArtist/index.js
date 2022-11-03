import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ArtistContext } from '../../context/ArtistContext';

import { ArtistIndex, SongIndex, SongForm, LoadingSpinner } from '../../Components';

import { useSelector } from 'react-redux';

export default function IndividualArtist() {

    // const [artists, setArtists] = useContext(ArtistContext)
    const artists = useSelector(state => state.artists)
    const loading = useSelector(state => state.loading)
    const [display, setDisplay] = useState("none")

    const renderLoadingSpinner = () => {
      setDisplay(prev => loading == true ? prev = "grid" : prev = "none")
    }

    console.log("artist songs", artists[0].songs[0]);

    const [filteredArtist, setFilteredArtist] = useState([{songs: [{}]}])

    const params = useParams();

    const newArtist = artists.filter((artist) => artist.name == params.name)
    console.log(newArtist[0]);
    console.log(newArtist[0].songs);

    const findArtist = () => {
      console.log(params);
        setFilteredArtist(artists.filter((artist) => artist.name == params.name));
    }

    const renderSongs = (songs) => {
      console.log("songs");
      return songs.map(song => 
      <>
      <SongIndex songName={song.songName} releaseDate={song.releaseDate} coverArt={song.coverArt}/>
      </>
      )
  }
    
    useEffect(() => {
        findArtist()
        console.log("filteredArtist", filteredArtist);
    }, [params, artists])

    useEffect(() => {
      renderLoadingSpinner()
    }, [loading])


  return (
    <>
    <ArtistIndex name={filteredArtist[0].name} genre={filteredArtist[0].genre} intro={filteredArtist[0].intro}/>
    {renderSongs(filteredArtist[0].songs)}
    {loading ? <LoadingSpinner /> :  <SongForm artist={filteredArtist[0]}/>}
    </>
  )
}
