import "./product_description.css";

const ProductDescription = ({product}) => {
    return (
        <div className = "product-description-section">
            <img
            className = "product-image" 
            src = {product.img}
            style = {{ width: "auto", height: "300px" }}/>
                <div className="main-info">
                    <div className="info-header">
                        <h1>{product.name}</h1>
                        <h2>{product.type}</h2>
                        <h3>{product.description}</h3>
                    </div>
                    <div className="effects-section">
                        <ul>
                            {product.effects !== null && product.effects.map((ef, index) => (
                                <li key={`effect-${index}`}>{ef}</li>
                            ))}

                            {product.contains !== null && product.contains.map((ct, index) => (
                                <li key={`contain-${index}`}>{ct}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="price-section">
                        {"$"+product.price}
                    </div>
                </div>
            <div className="more-info">
                <div className="expanded-span">
                    <p>MODO DE EMPLEO</p>
                </div>
                <div className="expanded-span">
                    <p>INGREDIENTES BIO-ACTIVOS</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;