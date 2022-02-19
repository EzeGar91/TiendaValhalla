import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import data from "../Data/Data";
import {Item} from "../Item/Item"

const productos = data;

export const ItemList = (props) =>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState()


    useEffect(() => {
        setLoading(true)
        const promise = getItems()
        promise.then(json => { 
            setLoading(false)
            setProducts(json) 
        })
    }, [])


    const getItems = () => {

        const promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(productos)

            }, 2000)
        })

        return promise
    }

    return(
        <>
        {loading && <p>Cargando...</p>}
        <div className="row justify-content-center">
            {products.map(product => <Item title={product.title} sub={product.sub} pictureUrl={product.pictureUrl} price={product.price} onAddCard={(evento) => console.log(evento)}/>)}
        </div>
        </>
    )
}
