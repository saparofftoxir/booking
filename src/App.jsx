import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Navbar from "./components/Navbar"
import Avia from "./Home/Avia"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avia" element={<Avia />} />

      </Routes>
    </>
  )
}

export default App
