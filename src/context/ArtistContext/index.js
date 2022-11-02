import React, { createContext, useState } from "react";

let artistData =[
    {name: "Boy Pablo", genre: "Indie", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "../../images/feelinglonely.jpg"}, {songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "../../images/feelinglonely.jpg"}]},
    {name: "The Magic Gang", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "../../images/feelinglonely.jpg"}, {songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "../../images/feelinglonely.jpg"}]},
    {name: "Dutch Criminal Record", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "../../images/feelinglonely.jpg"}, {songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "../../images/feelinglonely.jpg"}]},
    {name: "The Amazons", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "../../images/feelinglonely.jpg"}, {songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "../../images/feelinglonely.jpg"}]}
]

export const ArtistContext = createContext();

export const ArtistProvider = (props) => {
    const [artists, setArtists] = useState(artistData);
    return (
        <ArtistContext.Provider value={[artists, setArtists]}>
            {props.children}
        </ArtistContext.Provider>
    )
}
