import "./products.css"
import Icon from "@mdi/react";
import { mdiCart } from "@mdi/js";

import { Link } from 'react-router-dom';

import products from "../../../data/data.js";

const ProductsSection = () => {
    return (
        <div className="products-home-section">
            {products.map((product)=>(
                
                    <div
                    key = {product.id}
                    className= "product-card">
                        <Link to = {`/producto/${product.identifier}`} className="product-card-link">
                        <img 
                            src = {product.img}
                            style={{width: "auto", height: "220px"}}/>
                        <div className="product-info">
                            <p className="title">{product.name}</p>
                            <p className="type">{product.type}</p>
                            <p className="description">{product.description}</p>
                            <p className="price">{product.oldPrice !== null && (<s>{"$" + product.oldPrice.toFixed(2) + " "}</s>)}{("$"+ product.price.toFixed(2))}</p>
                            <div className="car-label">
                                <Icon className="cart-icon" path={mdiCart} size={0.8}/>
                                <div className="my-space"></div>
                                <p>Añadir al carrito</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                
            ))}
        </div>
    )
}

export default ProductsSection;