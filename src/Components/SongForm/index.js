import React from 'react'

export default function SongForm({artist, setArtists}) {

    const createSong = (e, artistOfSong) => {
        console.log("Creating song")
        console.log(artistOfSong);
        console.log(e.target.songName.value, e.target.releaseDate.value)
        setArtists(prev => prev.map((el) => {
            if (artistOfSong.name === el.name) {
                return {
                    ...el, 
                    songs: [
                        ...el.songs,
                        {
                            songName: e.target.songName.value,
                            releaseDate: e.target.releaseDate.value,
                            coverArt: "../../images/feelinglonely.jpg"
                        }
                    ]

                    }
                }
            return el
        }))
    }

  return (
    <div>
        <form onSubmit={(e) => {
        e.preventDefault()
        createSong(e, artist)
        }}>
        <input type="text" placeholder="Song name" name="songName"></input>
        <input type="text" placeholder="Release date" name="releaseDate"></input>
        <input type="submit"></input>
        </form>
    </div>
  )
}
