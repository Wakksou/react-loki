import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Main name="tacos" url="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg" price="3"/>
      <Main name="enchiladas" url="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg" price="12"/>
      <Main name="mole poblano" url="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg" price="6"/>
      <Footer/>
    </div>
  );
}

export default App;
