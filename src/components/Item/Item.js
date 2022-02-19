import React from "react";

export const Item = ({title, price, pictureUrl}) => {
    
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={pictureUrl} alt="img"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <button className="btn btn-primary">+ info</button>
            </div>
            </div>
                )
}