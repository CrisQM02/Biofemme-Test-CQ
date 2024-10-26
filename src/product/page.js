import { useParams } from 'react-router-dom';
import products from "../data/data.js"

import "./product.css";
import ProductDescription from './widgets/product_description/product_description.js';


const ProductPage = () => {
    const {identifier} = useParams();

    const product = products.find(p => p.identifier === identifier);

    return (
        <div className = "product-page">
            <div className = "product-name-banner">
                <h1 className = "banner-title">{product.name}</h1>
                <h2 className = "banner-subtitle">{product.type}</h2>
            </div>
            <div className="directory">
                <p className="dir-tab">Inicio</p>
                <p className="dir-sep">/</p>
                <p className="dir-tab">Productos</p>
                <p className="dir-sep">/</p>
                <p className="dir-tab">{product.category}</p>
                <p className="dir-sep">/</p>
                <p className="dir-tab">{product.name}</p>
            </div>
            <hr class="custom-separator" style={{borderTopColor: "var(--gray-light)", margin:"5px 15%"}}></hr>
            <ProductDescription product={product}/>
        </div>
    )
}

export default ProductPage;