import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import { ArtistPage, Home, NotFound, IndividualArtist } from "./pages";
import { Header, Footer } from "./layouts";


const App = () => {

    return(
        <>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/artists" element={<ArtistPage/>}>
            <Route path=":name" element={<IndividualArtist/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
        </>
    )
}

export default App
