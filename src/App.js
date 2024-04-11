import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Notfound from "./pages/Notfound.jsx";
import DishDetails from "./pages/DishDetails.jsx";
import About from "./pages/About.jsx";
import { useEffect, useState } from 'react';
import Cart from "./pages/Cart.jsx";

function App() {

  return (
    <>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="plat/:slug" element={<DishDetails/>} />
            <Route path="/a_propos" element={<About />} />
            <Route path="panier" element={<Cart />} />
            <Route path='*' element={<Notfound/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;