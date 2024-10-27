import "./product_value.css"

const ProductValue = ({product}) => {
    return (
        <div className="product-value">
            <h1>VALORACIONES DE ESTE PRODUCTO</h1>
            <h2>{product.name}</h2>
            <p>No hay valoraciones aún.</p>
            <div className="grade-product">
                <div className="grade-product-section">
                        <h1>{`Sé el primero en valorar “${product.name}”`}</h1>
                        <p>Debes acceder para publicar una valoración.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductValue;