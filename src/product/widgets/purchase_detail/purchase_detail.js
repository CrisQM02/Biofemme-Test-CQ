import Icon from "@mdi/react";
import "./purchase_detail.css";
import { mdiCart } from "@mdi/js";

const PurchaseDetail = () => {
    return (
        <div className="purchase-detail">
            <input 
                type="number" 
                className="count-textfield" 
                defaultValue={1} 
            />
            <div className="add-cart-btn">
                <Icon className= "cart-icon" path={mdiCart} size={0.8}/>
                <p>Añadir al carrito</p>
            </div>
        </div>
    );
}

export default PurchaseDetail;
