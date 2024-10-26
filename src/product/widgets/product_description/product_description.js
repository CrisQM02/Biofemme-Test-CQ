import ExpandableLabel from "../expandable_label/expandable_label";
import "./product_description.css";

const ProductDescription = ({product}) => {
    return (
        <div className = "product-description-section">
            <img
            className = "product-image" 
            src = {product.img}
            style = {{ width: "auto", height: "300px" }}/>
                <div className="main-info">
                    <div className="info-header">
                        <h1>{product.name}</h1>
                        <h2>{product.type}</h2>
                        <h3>{product.description}</h3>
                    </div>
                    <div className="effects-section">
                        <ul>
                            {product.effects !== null && product.effects.map((ef, index) => (
                                <li key={`effect-${index}`}>{ef}</li>
                            ))}

                            {product.contains !== null && product.contains.map((ct, index) => (
                                <li key={`contain-${index}`}>{ct}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="price-section">
                        {"$"+product.price}
                    </div>
                </div>
            <div className="more-info">
                <ExpandableLabel label={"MODO DE EMPLEO"} 
                    content={
                        <p className="steps-text">{
                            product.usage.map((u,index)=>(
                                <div key={index}>
                                    {u.title && <>{u.title}<br /></>}
                                    {u.steps.map((s,idx)=>(
                                    <span key = {idx}>
                                        {`${idx+1}. ${s}`}<br />
                                    </span>       
                                    ))}
                                    {<br />}
                                </div>
                            ))
                            }</p>
                        
                    }/>
                <ExpandableLabel label={"INGREDIENTES BIO-ACTIVOS"} content={"AAAA"}/>
            </div>
        </div>
    )
}

export default ProductDescription;