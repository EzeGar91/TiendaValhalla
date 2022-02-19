import ItemCount from "../ItemCount/ItemCount";

export const ItemDetail = ({title, price, pictureUrl, description}) => {
    
    return (
        <div className="card" style={{width: "18rem", margin:"10px"}}>
            <img className="card-img-top" src={pictureUrl} alt="img"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <ItemCount stock={5} initial={1}/>
            </div>
        </div>
    )
}