import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Notfound from "./pages/Notfound.jsx";
import DishDetails from "./pages/DishDetails.jsx";

function App() {
  return (
    <>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/plat/:id" element={<DishDetails />} />
            <Route path='*' element={<Notfound/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;