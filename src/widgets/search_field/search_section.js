import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiChevronDown } from "@mdi/js";
import MySearchField from "./search_field";
import bioLogo from "../../assets/images/Biofemme_Logo.png";
import "./search_section.css";
import { useNavigate } from "react-router-dom";
import ProductDropdown from "./product_span/product_dropdown";

const SearchSection = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <div className="search-section">
            <img
                src={bioLogo}
                alt="bioLogo"
                className="bio-logo-img"
                style={{ width: "auto", height: "66px", marginLeft: "105px", cursor: "pointer" }}
                onClick={handleLogoClick}
            />
            <div className="search-links">
                <a
                    className="shop-link"
                    href="https://compras.biofemme.com.ec/"
                    rel="noopener noreferrer"
                >
                    TIENDA
                </a>
    
                <div
                    className="products-dropdown"
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    <a
                        className="products-link"
                        href="https://compras.biofemme.com.ec/productos/"
                        rel="noopener noreferrer"
                    >
                        <div className="search-link-label">
                            <p>PRODUCTOS</p>
                            <Icon className="search-label-icon" path={mdiChevronDown} size={1}/>
                        </div>
                    </a>
                    
                    {isMenuOpen && (
                        <ProductDropdown/>
                    )}
                </div>

                <div className="search-bar">
                    <MySearchField />
                </div>
                
                <div className="cart-section">
                    <Icon className="cart-icon-search" path={mdiCartOutline} size={0.8} />
                    <div className="item-count">0</div>
                    <span className="tooltip">Carrito</span>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;
