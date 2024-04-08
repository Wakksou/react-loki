import logo from './logo.svg';
import './App.css';
import Plat from './components/Plat';

function App() {
  return (
    <div>
    <Plat nom="tacos" url="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg" prix="3"/>
    <Plat nom="enchiladas" url="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg" prix="12"/>
    <Plat nom="mole poblano" url="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg" prix="6"/>
    </div>
  );
}

export default App;
