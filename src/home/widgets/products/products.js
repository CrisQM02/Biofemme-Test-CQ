import "./products.css"

import p1 from "./products_images/p1-lifting-serum.jpg";
import p2 from "./products_images/p2-Sunscreen-50.jpg";
import p3 from "./products_images/p3-BBOIL.jpg";
import p4 from "./products_images/p4-Mini-Kit.jpg";

const products = [
    {id: 1, name: "LIFTING SERUM", type: "Sérum Tensor", description: "Proage | Todo tipo de piel", price: 21.57, img: p1, url:"https://compras.biofemme.com.ec/producto/lifting-serum-serum-tensor/"},
    {id: 2, name: "SUNSCREEN 50+", type: "Bloqueador Solar", description: "Protección | Todo tipo de piel", price: 24.64, img: p2, url:"https://compras.biofemme.com.ec/producto/sunscreen-50-bloqueador-solar-50/"},
    {id: 3, name: "BIO BEAUTY OIL", type: "Aceite Seco Hidratante", description: "Hidratación | Todo tipo de piel", price: 16.42, img: p3, url:"https://compras.biofemme.com.ec/producto/bio-beauty-oil-aceite-seco-hidratante/"},
    {id: 4, name: "BIOFEMME MINI KIT", type: "Mini Sizes", description: "Sets | Piel mixta a grasa", price: 15.00, img: p4, url:"https://compras.biofemme.com.ec/producto/biofemme-mini-kit/"},
]

const ProductsSection = () => {
    return (
        <div className="products-home-section">
            {products.map((product)=>(
                <div
                key = {product.id}
                className= "product-card">
                    <img 
                        src = {product.img}
                        style={{width: "auto", height: "220px"}}
                        onClick={() => window.location.href = product.url}/>
                    <div className="product-info">
                        <p className="title">{product.name}</p>
                        <p className="type">{product.type}</p>
                        <p className="description">{product.description}</p>
                        <p className="price">{"$"+ product.price.toFixed(2)}</p>

                        <div className="car-label">
                            <p>Añadir al carrito</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsSection;