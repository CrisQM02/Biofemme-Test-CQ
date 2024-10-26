import "./home.css";

import MyFooter from "../widgets/my_footer";
import MyAppBar from "../widgets/my_app_bar";
import Icon from "@mdi/react";
import { useEffect, useState } from "react";

import bioLogo from "../assets/images/Biofemme_Logo.png";
import bioLogoWhite from "../assets/images/bio-logo-white.png";
import MyCarrousel from "./widgets/my_carrousel/my_carrousel";
import CategoryCard from "./widgets/categories/categories";
import ProductsSection from "./widgets/products/products";
import MySearchField from "./widgets/search_field/search_field";
import { mdiCartOutline } from "@mdi/js";
import { Tooltip } from "react-tooltip";

const Home = () => {
    return (
        <div className="home">
            <MyAppBar/>
            <div className="content">
                <div className="search-section">
                    <img
                        src={bioLogo}
                        alt="bioLogo"
                        className="bio-logo-img"
                        style={{ width: "auto", height: "66px" }}/>
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
                            <Icon className = "cart-icon" path={mdiCartOutline} size={0.8}/>
                            <div className = "item-count">0</div>
                            <span class="tooltip">Carrito</span>
                        </div>
                    </div>
                </div>
                <MyCarrousel/>
                <div className="products-section">
                    <h1>CATEGORÍAS DE PRODUCTOS BIOFEMME</h1>
                    <h2>DALE CLICK Y DESCUBRE LOS PRODUCTOS DE CADA UNA</h2>
                    <CategoryCard/>
                    <div className="new-products">
                        <h1>PRODUCTOS NUEVOS</h1>
                        <ProductsSection/>
                    </div>
                </div>
                <div className="see-products">
                    <div className="see-products-info">
                        <h1>CONOCE TODOS LOS PRODUCTOS BIOFEMME</h1>
                        <hr class="custom-separator" style={{margin:"10px 40px"}}></hr>
                        <p onClick={() => window.location.href = "https://compras.biofemme.com.ec/productos/"}>VER TODOS</p>
                        <hr class="custom-separator" style={{margin:"10px 40px"}}></hr>
                    </div>
                </div>
                <div className="your-skin-type">
                    <div className="your-skin-type-info">
                        <h1>¿CONOCES TU TIPO DE PIEL?</h1>
                        <h2>Te ayudamos a identificarla</h2>
                        <hr class="custom-separator"style={{borderTopColor: "var(--dark-gray)"}}/>
                        <p onClick={()=> window.location.href = "https://compras.biofemme.com.ec/descubre-tu-piel/"}>COMENZAR</p>
                        <hr class="custom-separator"style={{borderTopColor: "var(--dark-gray)"}}/>
                    </div>
                </div>
            </div>
            <MyFooter/>
        </div>
    )
}

export default Home;