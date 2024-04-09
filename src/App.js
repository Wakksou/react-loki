import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;