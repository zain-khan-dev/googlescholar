import React from "react"

import "@testing-library/jest-dom/extend-expect"
import {render, screen } from "@testing-library/react"
import SearchView from "./BookSearchView"
import BookMetadata from "./BookMetadata"


describe("Testing the book search ", () => {
    let container
    beforeEach(()=>{
        const metadata = {"description":"This is a demo description", "authors":["joe1", "joe2", "joe3"], "categories":"Horror", "publishedDate":"2022-01-01"}
        container = render(<BookMetadata metadata={metadata} />).container
        
    })

    test("Description to be rendered correctly", () => {
        const element = container.querySelector(".description")
        expect(element).toHaveTextContent("This is a demo description")

    })

    test("authors to be  rendered correctly", () => {
        const element = container.querySelector(".author")
        expect(element).toHaveTextContent("joe1 ,joe2 ,joe3")
    })

    test("categories to be  rendered correctly", () => {
        const element = container.querySelector(".category")
        expect(element).toHaveTextContent("Horror")
    })

    test("published date to be  rendered correctly", () => {
        const element = container.querySelector(".pubDate")
        expect(element).toHaveTextContent("2022-01-01")
    })

})
