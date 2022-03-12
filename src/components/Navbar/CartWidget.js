import cart from '../../assets/cart.png';
import "./CartWidget.css"
import React from 'react'; 

export const CartWidget = () =>{

     

    return(
        <div>
            <img src={cart} width="45px" alt="logo"></img>
            <span className='spancart'>0</span>
        </div>
    )
}