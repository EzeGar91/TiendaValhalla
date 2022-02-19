
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavbarComp  } from './components/Navbar/NavbarComp'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <div className='App'> 
      <NavbarComp />
      <ItemListContainer greetings ="Bienvenidos a Valhalla Records"/>      
      <ItemDetailContainer/>
      </div>
    </>
  );
}

export default App;
