import './App.css';
import Dish from './components/Dish';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Dish name="tacos" url="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg" price="3"/>
        <Dish name="enchiladas" url="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg" price="12"/>
        <Dish name="mole poblano" url="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg" price="6"/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
