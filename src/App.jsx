import "./App.css";
import Layout from "./Partials/Layout";
import Home from "./Home/Home";
import About from "./About/About";
import Vans from "./Vans/Vans";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./server";
import VanPage from "./Vans/VanPage/VanPage";
import Dashboard from "./Host/Dashboard/Dashboard";
import Income from "./Host/Income/Income";
import Reviews from "./Host/Reviews/Reviews";
import Hostlayout from "./Partials/HostLayout/HostLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanPage />} />
          <Route path="host" element={<Hostlayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
