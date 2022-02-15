
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemList} from './components/ItemList/ItemList'
import {NavbarComp} from './components/Navbar/NavbarComp';

function App() {
  return (
    <>
      <div className='App'> 
      <NavbarComp />
       <ItemList />      
      </div>
    </>
  );
}

export default App;
