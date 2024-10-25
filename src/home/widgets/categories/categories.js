import React from "react";
import "./categories.css";

import img1 from "./categories_images/categoria-Limpieza.jpg";
import imgH1 from "./categories_images/categoria-Limpieza-hover.jpg"

import img2 from "./categories_images/categoria-Hidratacion.jpg"
import imgH2 from "./categories_images/categoria-Hidratacion-hover.jpg";

import img3 from "./categories_images/categoria-proteccion.jpg"
import imgH3 from "./categories_images/categoria-proteccion-hover.jpg"

import img4 from "./categories_images/categoria-Proage.jpg"
import imgH4 from "./categories_images/categoria-Proage-hover.jpg"

import img5 from "./categories_images/categoria-acne.jpg"
import imgH5 from "./categories_images/categoria-acne-hover.jpg"


const categories = [
    {id: 1, label: "LIMPIEZA", img: img1, hover: imgH1, url: "https://compras.biofemme.com.ec/categoria-producto/productos/limpieza/"},
    {id: 2, label: "HIDRATACIÓN", img: img2, hover: imgH2, url: "https://compras.biofemme.com.ec/categoria-producto/productos/hidratacion/"},
    {id: 3, label: "PROTECCIÓN", img: img3, hover: imgH3, url: "https://compras.biofemme.com.ec/categoria-producto/productos/proteccion/"},
    {id: 4, label: "PROAGE", img: img4, hover: imgH4, url: "https://compras.biofemme.com.ec/categoria-producto/productos/proage/"},
    {id: 5, label: "ACNÉ CONTROL", img: img5, hover: imgH5, url: "https://compras.biofemme.com.ec/categoria-producto/productos/acne-control/"},
]

const CategoryCard = () => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div 
          key = {index} 
          className = "category-card" 
          style = {{ 
            backgroundImage: `url(${category.img})`
          }}
          onClick={() => window.location.href = category.url}
          onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url(${category.hover})`}
          onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url(${category.img})`}
        >
            <p>{category.label}</p> 
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
