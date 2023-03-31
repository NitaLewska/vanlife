import './App.css'
import Home from './Home/Home'
import About from './About/About'
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
