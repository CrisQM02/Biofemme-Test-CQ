import Icon from "@mdi/react";
import "./purchase_detail.css";
import { mdiCart } from "@mdi/js";
import wsIcon from "../../../assets/svg/whatsapp_icon.svg"; 

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
            <img src={wsIcon} alt="whatsapp" className="ws-icon" 
                onClick={()=>window.open("https://web.whatsapp.com/send?phone=593994074956&text=%C2%A1Hola!%20%F0%9F%98%8A%20Necesito%20m%C3%A1s%20informaci%C3%B3n%20sobre%20LIFTING%20SERUM","_blank")}/>
        </div>
    );
}

export default PurchaseDetail;
