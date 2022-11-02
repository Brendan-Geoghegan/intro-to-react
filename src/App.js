import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'

import { ArtistPage, Home, NotFound } from "./pages";
import { Header, Footer } from "./layouts";


const App = () => {

    return(
        <>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/artists" element={<ArtistPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
        </>
    )
}

export default App
