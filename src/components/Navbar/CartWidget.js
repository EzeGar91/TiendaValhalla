import carro from '../../assets/cart.png'
import "../Navbar/CartWidget.css"

export const CartWidget = () =>{
    return (
        <div>
            <img src={carro} width="30px" alt="cart"></img>
            <span className='spancart'>0</span>
        </div>
    )
}