import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;