import ExpandableLabel from "../expandable_label/expandable_label";
import PurchaseDetail from "../purchase_detail/purchase_detail";
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
                        {<p className="old-price">
                            {product.oldPrice !== null && (<s>{"$" + product.oldPrice.toFixed(2) + " "}</s>)}
                        </p>}
                        <p className="current-price">
                            {("$"+ product.price.toFixed(2))}
                        </p>
                    </div>
                    <PurchaseDetail/>
                </div>
            <div className="more-info">
                <ExpandableLabel label={"MODO DE EMPLEO"} 
                    content={
                        <p className="steps-text">{
                            product.usage.map((u,index)=>(
                                <div key={`u-${index}`}>
                                    {u.title && <>{u.title}<br /></>}
                                    {u.steps.map((s,idx)=>(
                                    <span key = {`step-${idx}`}>
                                        {`${idx+1}. ${s}`}<br />
                                    </span>       
                                    ))}
                                    {<br />}
                                </div>
                            ))
                            }</p>
                        
                    }/>
                <ExpandableLabel label={"INGREDIENTES BIO-ACTIVOS"} 
                content={
                    <p className="steps-text">{
                        product.ingredients.map((ct,index)=>(
                            <div key={`i-${index}`}>
                                {ct.title && <>{ct.title}<br /></>}
                                {ct.list.map((i,idx)=>(
                                    <span key = {`step-${idx}`}>
                                        {`${i}`}<br />
                                    </span>       
                                    ))}
                                {<br />}
                            </div>
                        ))
                        }</p>
                    
                }/>
            </div>
        </div>
    )
}

export default ProductDescription;