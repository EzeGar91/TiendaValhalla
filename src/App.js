
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComp} from './components/Navbar/NavbarComp';
import {ItemList} from './components/ItemList/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <div className='content'>
        <ItemList titulo="Soda Stereo" precio="5600" />
        <ItemList titulo="Guns & Roses" precio="6500" />
        <ItemList titulo="Pink Floyd" precio="8900" />
        
      </div>
          
    </div>
  );
}

export default App;
