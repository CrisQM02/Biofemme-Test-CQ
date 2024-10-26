import p1 from "../assets/images/products_images/p1-lifting-serum.jpg";
import p2 from "../assets/images/products_images/p2-Sunscreen-50.jpg";
import p3 from "../assets/images/products_images/p3-BBOIL.jpg";
import p4 from "../assets/images/products_images/p4-Mini-Kit.jpg";


const products = [
    {id: 1, name: "LIFTING SERUM", type: "Sérum Tensor", description: "Proage | Todo tipo de piel", 
        price: 21.57, oldPrice: null, img: p1, url:"https://compras.biofemme.com.ec/producto/lifting-serum-serum-tensor/"},
    {id: 2, name: "SUNSCREEN 50+", type: "Bloqueador Solar", description: "Protección | Todo tipo de piel", 
        price: 24.64, oldPrice: null, img: p2, url:"https://compras.biofemme.com.ec/producto/sunscreen-50-bloqueador-solar-50/"},
    {id: 3, name: "BIO BEAUTY OIL", type: "Aceite Seco Hidratante", description: "Hidratación | Todo tipo de piel", 
        price: 16.42, oldPrice: null, img: p3, url:"https://compras.biofemme.com.ec/producto/bio-beauty-oil-aceite-seco-hidratante/"},
    {id: 4, name: "BIOFEMME MINI KIT", type: "Mini Sizes", description: "Sets | Piel mixta a grasa", 
        price: 15.00, oldPrice: 20.70, img: p4, url:"https://compras.biofemme.com.ec/producto/biofemme-mini-kit/"},
]

export default products;