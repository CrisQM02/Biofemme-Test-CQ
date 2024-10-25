import "./home.css";

import MyFooter from "../widgets/my_footer";
import MyAppBar from "../widgets/my_app_bar"
import { useEffect, useState } from "react";

import bioLogo from "../assets/images/Biofemme_Logo.png";
import bioLogoWhite from "../assets/images/bio-logo-white.png";
import MyCarrousel from "./widgets/my_carrousel/my_carrousel";
import CategoryCard from "./widgets/categories/categories";

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
                        Search Bar
                    </div>
                    </div>
                </div>
                <MyCarrousel/>
                <div className="products-section">
                    <h1>CATEGORÍAS DE PRODUCTOS BIOFEMME</h1>
                    <h2>DALE CLICK Y DESCUBRE LOS PRODUCTOS DE CADA UNA</h2>
                    <CategoryCard/>
                    <h1>PRODUCTOS NUEVOS</h1>
                </div>
            </div>
            <MyFooter/>
        </div>
    )
}

export default Home;