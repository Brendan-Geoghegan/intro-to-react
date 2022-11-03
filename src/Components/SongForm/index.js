import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { asyncAddSong, quickLoading } from '../../actions';

export default function SongForm({artist, setArtists}) {

    // const createSong = (e, artistOfSong) => {
    //     console.log("Creating song")
    //     console.log(artistOfSong);
    //     console.log(e.target.songName.value, e.target.releaseDate.value)
    //     setArtists(prev => prev.map((el) => {
    //         if (artistOfSong.name === el.name) {
    //             return {
    //                 ...el, 
    //                 songs: [
    //                     ...el.songs,
    //                     {
    //                         songName: e.target.songName.value,
    //                         releaseDate: e.target.releaseDate.value,
    //                         coverArt: e.target.coverArt.value,
    //                     }
    //                 ]

    //                 }
    //             }
    //         return el
    //     }))
    // }

    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();

    function handleSubmit(e, artist) {
        console.log("submit", e.target.songName.value);
        console.log("submit", artist);
        dispatch(quickLoading())
        dispatch(asyncAddSong(e, artist))

    }

  return (
    <div>
        <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(e, artist)
        }}>
        <input type="text" placeholder="Song name" name="songName"></input>
        <input type="text" placeholder="Release date" name="releaseDate"></input>
        <input type="text" placeholder="Cover art image address" name="coverArt"></input>
        <input type="submit"></input>
        </form>
    </div>
  )
}
