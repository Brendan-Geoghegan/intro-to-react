import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ArtistIndex } from '../../Components';

export default function IndividualArtist() {

    const [artists, setArtists] = useState([
        {name: "Boy Pablo", genre: "Indie", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "./images/feelinglonely.jpg"}, {songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "./images/feelinglonely.jpg"}]},
        {name: "The Magic Gang", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: []},
        {name: "Dutch Criminal Record", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: []},
        {name: "The Amazons", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: []}
    ])

    const [filteredArtist, setFilteredArtist] = useState([{}])

    const params = useParams();

    const newArtist = artists.filter((artist) => artist.name == params.name)
    console.log(newArtist[0]);

    const findArtist = () => {
      console.log(params);
        setFilteredArtist(artists.filter((artist) => artist.name == params.name));
    }


    
    useEffect(() => {
        console.log("filteredArtist");
        findArtist()
        console.log(filteredArtist);
    }, [params])


  return (
    <ArtistIndex name={filteredArtist[0].name} genre={filteredArtist[0].genre} intro={filteredArtist[0].intro}/>
  )
}
