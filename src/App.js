import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/NavbarComp'  
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./views/Home";
import { Category } from "./views/Category";
 
function App() {

  return (
    <>
    <BrowserRouter>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} /> 
        <Route path="/category/:categoryId/:categoryName" element={<Category/>} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


