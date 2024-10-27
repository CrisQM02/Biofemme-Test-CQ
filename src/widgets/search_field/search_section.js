import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import MySearchField from "./search_field";

import bioLogo from "../../assets/images/Biofemme_Logo.png";

import "./search_section.css";
import { useNavigate } from "react-router-dom";

const SearchSection = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    return (<div className="search-section">
        <img
            src={bioLogo}
            alt="bioLogo"
            className="bio-logo-img"
            style={{ width: "auto", height: "66px", marginLeft: "105px", cursor:"pointer" }}
            onClick={handleLogoClick}/>
        <div className="search-links">
            <a
                className="shop-link"
                href="https://compras.biofemme.com.ec/"
                rel="noopener noreferrer"
            >
                TIENDA
            </a>
            <a
                className="products-link"
                href="https://compras.biofemme.com.ec/productos/"
                rel="noopener noreferrer"
            >
                PRODUCTOS
            </a>
            <div className="search-bar">
                <MySearchField/>
            </div>
            <div className = "cart-section">
                <Icon className = "cart-icon-search" path={mdiCartOutline} size={0.8}/>
                <div className = "item-count">0</div>
                <span class="tooltip">Carrito</span>
            </div>
        </div>
    </div>)
}

export default SearchSection;