import React  from "react";
import { useParams } from "react-router-dom";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";


export const Category = () => {
    const {categoryId, categoryName} = useParams();

    return (
        <div>
            <div>
                <ItemListContainer categoryId={categoryId} categoryName={categoryName}/>
            </div>
        </div>
    )
}