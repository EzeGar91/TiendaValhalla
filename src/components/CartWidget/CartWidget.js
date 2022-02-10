import carro from '../../assets/cart.png'


export const CartWidget = () => {
    return (
        <div>
            <img src= {carro} width = "30px"></img>
            <span style={{color:'white'}}>
                1
            </span>
        </div>
    )
}