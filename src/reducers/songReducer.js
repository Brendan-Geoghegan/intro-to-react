const initialState = {
    artists: [
        {name: "Boy Pablo", genre: "Indie", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Feeling Lonely", releaseDate: "18/12/19", coverArt: "https://i.scdn.co/image/ab67616d0000b2738d7d3584e5220d0cd406eea4"}, {songName: "Wachito Rico", releaseDate: "18/12/20", coverArt: "https://media.pitchfork.com/photos/5f889f6246ede078a4647488/1:1/w_600/wachito%20rico_boy%20pablo.jpg"}]},
        {name: "The Magic Gang", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Just a minute", releaseDate: "18/12/19", coverArt: "https://i.scdn.co/image/ab67616d0000b2732f86befca004362141bf4de9"}, {songName: "Caroline", releaseDate: "18/12/19", coverArt: "https://i.scdn.co/image/ab67616d0000b273badd22927f22334c2aa480a0"}]},
        {name: "Dutch Criminal Record", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Stuck Between", releaseDate: "18/12/19", coverArt: "https://i.scdn.co/image/ab67616d0000b273ee1bfbe0ceb5a7043caceb80"}, {songName: "Outside", releaseDate: "18/12/19", coverArt: "https://images.genius.com/8afe9a8f3c02e054009a31bd3ea7e06d.800x800x1.jpg"}]},
        {name: "The Amazons", genre: "Indie Rock", intro: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aliquid quod officia repudiandae aperiam facere voluptas voluptatibus inventore dolorem, maxime minima delectus nostrum cum doloribus. Incidunt dolorem ex eius accusantium.", songs: [{songName: "Black Magic", releaseDate: "18/12/19", coverArt: "https://m.media-amazon.com/images/I/81sG5P6emEL._SS500_.jpg"}, {songName: "Junk Food Forever", releaseDate: "18/12/19", coverArt: "https://i.scdn.co/image/ab67616d0000b27339cd118397f5d8f9813eb2fc"}]}
    ],
    loading: false
}

const songReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "ADD":
            return {...state,
                artists: state.artists.map((el) => {
                if (action.name === el.name) {
                 return {
                     ...el, 
                     songs: [
                         ...el.songs,
                         {
                             songName: action.e.target.songName.value,
                             releaseDate: action.e.target.releaseDate.value,
                             coverArt: action.e.target.coverArt.value,
                         }
                     ]
 
                     }
                 }
                 return el 
             }),
                loading: false
            }
        case "LOADING":
            return { ...state, loading: true }
        default:
            return state;
    }
}

export default songReducer;
