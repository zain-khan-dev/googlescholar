import {Home, Search, DetailedBook} from "./Container"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book/:id" element={<DetailedBook />} />
      </Routes>
    </Router>
  )
}

export default App