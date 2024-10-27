import { mdiStar } from "@mdi/js";
import "./product_value.css";
import Icon from "@mdi/react";

const ProductValue = ({product}) => {
    return (
        <div className="product-value">
            <h1>VALORACIONES DE ESTE PRODUCTO</h1>
            <h2>{product.name}</h2>
            <div className="stars-section">
                <Icon className="star-icon" path={mdiStar} size={1}/>
                <Icon className="star-icon" path={mdiStar} size={1}/>
                <Icon className="star-icon" path={mdiStar} size={1}/>
                <Icon className="star-icon" path={mdiStar} size={1}/>
                <Icon className="star-icon" path={mdiStar} size={1}/>
            </div>
            <p className="comfortaa">No hay valoraciones aún.</p>
            <div className="grade-product">
                <div className="grade-product-section">
                        <h1 className="comfortaa">{`Sé el primero en valorar “${product.name}”`}</h1>
                        <p className="comfortaa">Debes{" "}
                            <a href="https://compras.biofemme.com.ec/mi-cuenta/" className="account-link-access">acceder</a>
                            {" "}para publicar una valoración.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductValue;