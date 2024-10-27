import { useParams } from 'react-router-dom';
import products from "../data/data.js"

import "./product.css";
import ProductDescription from './widgets/product_description/product_description.js';

import spaIco from "../assets/images/htu-spa.png";
import lotionIco from "../assets/images/htu-locion-corporal.png";
import hairIco from "../assets/images/htu-female-with-bangs.png";

import Icon from "@mdi/react";
import { mdiHelpCircleOutline } from '@mdi/js';
import ProductValue from './widgets/product_value/product_value.js';
import ProductInterestedCard from './widgets/product_card_interested/product_card_interested.js';


const ProductPage = () => {
    const {identifier} = useParams();

    const product = products.find(p => p.identifier === identifier);

    return (
        <div className = "product-page">
            <div className = "product-name-banner">
                <h1 className = "banner-title">{product.name}</h1>
                <h2 className = "banner-subtitle">{product.type}</h2>
            </div>
            <div className="directory">
                <p className="dir-tab">Inicio</p>
                <p className="dir-sep">/</p>
                <p className="dir-tab">Productos</p>
                <p className="dir-sep">/</p>
                <p className="dir-tab">{product.category}</p>
                <p className="dir-sep">/</p>
                <p className="dir-tab">{product.name}</p>
            </div>
            <hr class="custom-separator" style={{borderTopColor: "var(--gray-light)", margin:"5px 15%"}}></hr>
            <ProductDescription product={product}/>
            <div className='how-to-use-section'>
                <div className="how-to-use-icons-section">
                    <h1>¿CÓMO USAR?</h1>
                    {product.useInfo !== null && 
                        <div className="how-to-use-icons">
                        {product.useInfo.map((use) => {
                            switch (use) {
                                case "SPA":
                                    return <img className="htu-icon" src={spaIco} alt="SPA" key={use} />;
                                case "LOTION":
                                    return <img className="htu-icon" src={lotionIco} alt="LOTION" key={use} />;
                                case "HAIR":
                                    return <img className="htu-icon" src={hairIco} alt="HAIR" key={use} />;
                                default:
                                    return null;
                            }
                        })}
                    </div>
                        }
                </div>
                <div className="how-to-use-media">
                    {product.gif !== null && <div className="gif-section"><img className="my-gif" src={product.gif}/></div>}
                </div>
            </div>
            <div className="separator-help">
                <hr class="custom-separator" style={{borderTopColor: "var(--gray-light)", margin:"5px 20px"}}></hr>
                <Icon className="help-icon" path={mdiHelpCircleOutline} size={1.5}/>
                <hr class="custom-separator" style={{borderTopColor: "var(--gray-light)", margin:"5px 20px"}}></hr>
            </div>
            <div className="help-section">
                <div className="help-title">
                    <h1>CONOCE SUS PROPIEDADES</h1>
                </div>
                <div className = "help-info">
                    <p>{product.properties.split('\n').map((linea, index) => (
                        <span key={index}>
                        {linea}
                    <br />
                    <br />
                </span>
                ))}</p>
                </div>
            </div>
            <div className="help-section" style={{backgroundColor: "var(--pink-lighter)"}}>
                <div className="help-title">
                    <h1>¿CÓMO ACTÚAN LOS INGREDIENTES
                    BIO-ACTIVOS?</h1>
                </div>
                <div className = "help-info">
                    <p className="bio-ingredients-act">{
                        product.howIngAct.map((i,index)=>(
                            <div key={`ing-${index}`}>
                                {i.ingredient}<br />
                                {i.info}
                                <br />
                                <br />
                            </div>
                    ))}</p>
                </div>
            </div>
            <hr class="custom-separator" style={{borderTopColor: "var(--gray-light)", margin:"0px 200px", marginTop:"50px"}}></hr>
            <ProductValue product={product}/>
            <hr class="custom-separator" style={{borderTopColor: "var(--gray-light)", margin:"50px 200px"}}></hr>
            <div className="also-interested-section">
                <h1>TAMBIÉN TE PUEDE INTERESAR</h1>
                <ProductInterestedCard productID={product.id}/>
            </div>
        </div>
    )
}

export default ProductPage;