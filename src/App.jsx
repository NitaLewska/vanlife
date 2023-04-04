import "./App.css";
import Layout from "./Partials/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Vans from "./Vans/Vans";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server";
import VanPage from "./Vans/VanPage/VanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
