import "../ItemList/ItemList.css"

export function ItemList (props) {
    return (
        <div className="card">
        <h3> Artista: {props.titulo} </h3>
        <p> Precio: {props.precio} </p>
        </div>
    )

}