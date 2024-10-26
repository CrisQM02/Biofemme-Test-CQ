import "./home.css";

import MyFooter from "../widgets/my_footer";

import { useEffect, useState } from "react";

import MyCarrousel from "./widgets/my_carrousel/my_carrousel";
import CategoryCard from "./widgets/categories/categories";
import ProductsSection from "./widgets/products/products";


const Home = () => {
    return (
        <div className="home">
            <div className="content">
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
        </div>
    )
}

export default Home;