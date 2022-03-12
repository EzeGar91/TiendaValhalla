import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/NavbarComp'  
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"; 
import { CartProvider } from "./context/useContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./views/Home";
import { Cart } from "./components/Cart/Cart";
import { Category } from "./views/Category";
 
function App() {

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} /> 
        <Route path="/category/:categoryId/:categoryName" element={<Category/>} /> 
        <Route path="/cart" element={<Cart/>} /> 
      </Routes>
    </BrowserRouter>
    </CartProvider>
    
    </>
  );
}

export default App;


