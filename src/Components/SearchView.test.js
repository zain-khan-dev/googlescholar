import React from "react"

import "@testing-library/jest-dom/extend-expect"
import {render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import SearchView from "./SearchView"


describe("Testing the multiple books render", () => {
    let container1
    let container2
    beforeEach(()=>{
        const books = [
            {"volumeInfo": {"title": "First Book", "imageLinks":{"thumbnail":"../assets/harry_potter.jpg"}}, "id":1}, 
            {"volumeInfo": {"title": "Second Book", "imageLinks":{"thumbnail":"../assets/harry_potter.jpg"}}, "id":2}
        ]
        container1 = render(<MemoryRouter><SearchView books={books} /></MemoryRouter>).container
        container2 = render(<MemoryRouter><SearchView books={null} /></MemoryRouter>).container
    })

    test("The number of books rendered should be 2", () => {
        expect(container1.firstChild.children).toHaveLength(2)
    })
    test("The number of books rendered should be 0 when there are no books", () => {
        expect(container2.firstChild.children).toHaveLength(0)
    })

})
