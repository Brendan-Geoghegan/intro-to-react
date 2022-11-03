function addSong(e, artist) {
    return { type: "ADD", name: artist.name, e: e }
}

export function asyncAddSong(e, artist) {
    return dispatch => {
        setTimeout(()=> {
            dispatch(addSong(e, artist))
        }, 2000)
    }
}

export function quickLoading() {
    return { type: "LOADING" }
}
