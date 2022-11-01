/**
 * @jest-environment jsdom
 */

 import React, { useState } from 'react';
 import '@testing-library/jest-dom';
 import { screen, render } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';

 import SongForm from './SongForm';

 const [artists, setArtists] = useState([
    {
        name: "test name",
        genre: "test genre",
        intro: "test intro",
        songs: [{
            songName: "test song",
            releaseDate: "test date",
            coverArt: "test art"
        }]
}
 ])


 describe("SongForm component", () => {
    beforeEach(() => {
        render(<SongForm artist={artists[0]} setArtists={setArtists}/>)
    })

    it("Adds a new song when the form is submitted", async () => {
        const form = screen.getByRole("form")
        expect(artists[0].songs.length).toBe(1)

        await userEvent.submit(form)

        expect(artists[0].songs.length).toBe(2)
    })
 })
