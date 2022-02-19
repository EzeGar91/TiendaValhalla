
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavbarComp  } from './components/Navbar/NavbarComp'

function App() {
  return (
    <>
      <div className='App'> 
      <NavbarComp />
      <ItemListContainer greetings ="Bienvenidos a mi Ecommerce"/>      
      </div>
    </>
  );
}

export default App;
