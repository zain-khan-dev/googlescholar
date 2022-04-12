import React from "react"

import "@testing-library/jest-dom/extend-expect"
import {render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import SearchView from "./BookSearchView"


describe("Testing the book search ", () => {
    let container
    beforeEach(()=>{
        const book = {"volumeInfo": {"title": "My test Book", "imageLinks":{"thumbnail":"../assets/harry_potter.jpg"}}, "id":1}
        container = render(<MemoryRouter><SearchView volumeInfo={book.volumeInfo} key={book.id} id={book.id} /></MemoryRouter>)   
    })

    test("Renders the text correctly", () => {
        const element = screen.getByText("My test Book")
        expect(element).toBeDefined()
    })

})
