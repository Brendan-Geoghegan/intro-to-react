/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import '@testing-library/jest-dom';
 import { screen, render } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';

 import SongIndex from './SongIndex/index.js';


 describe("SongIndex component", () => {

    beforeEach(() => {
        render(<SongIndex songName="Test Song" releaseDate="Test Date" coverArt="../images/feelinglonely.jpg"/>)
    })

    it("Displays the song name", () => {

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Song: Test Song");
    })

    it("Displays the release date", () => {

        const date = screen.getByRole("figure");

        expect(date).toBeInTheDocument();
        expect(date.textContent).toBe("Release date: Test Date");
    })

    it("Displays the cover art", () => {

        const art = screen.getByRole("img");

        expect(art).toBeInTheDocument();
        expect(art.src).toBe("http://localhost/images/feelinglonely.jpg");
    })

    it("Changes the button to Liked and blue colored when clicked", async () => {
        const button = screen.getByRole("button");

        expect(button.textContent).toBe("Like")
        expect(button.style.color).toBe("black")

        await userEvent.click(button);

        expect(button.textContent).toBe("Liked")
        expect(button.style.color).toBe("blue")
    })
 })
