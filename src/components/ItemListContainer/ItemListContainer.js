
import { useEffect } from "react"
import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import Container from "react-bootstrap/Container"
import data from "../Data/Data"

const productos = data;

const itemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


useEffect(() => {
    const promise = getItems()
    promise.then(json => { setProducts(json) })
    
}, [id, products])
const getItems = () => {
    
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        setLoading(true)
    }, 4000)

})

    return promise
}

return (
    <Container className="mt-5 itemListCont">
        <ItemList products={products} loading={loading} />
    </Container>
)
}
