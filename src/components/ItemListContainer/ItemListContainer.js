import ItemCount from "../ItemCount/ItemCount"

export const ItemListContainer = (props) =>{

    const {greetings} = props

    return(  
        <div> 
        <h1>{greetings}</h1>
        <ItemCount stock={5} initial={1} /> 
        </div>       
    )
}
