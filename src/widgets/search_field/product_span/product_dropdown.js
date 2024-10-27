import Icon from "@mdi/react";
import "./product_dropdown.css";
import productSpanData from "./product_dropdown_data.js";
import { mdiArrowRightThin } from "@mdi/js";

const ProductDropdown = () => {
    return (
        <div className="product-dropdown-menu">
            <ul className="dropdown-menu">
                {productSpanData.map((ct, index) => (
                    <li key={`ct-${index}`}>
                        <div className="menu-category">
                            <p className="menu-category-title">{ct.title}</p>
                            <div className="menu-category-list">
                                <ul className="elements-list">
                                    {ct.elements.map((e, idx) => (
                                        <li
                                            className="li-elements"
                                            key={`el-${idx}`}
                                        >
                                            <div className="category-element"
                                            style={{
                                                borderBottom: idx !== ct.elements.length - 1 ? "1px solid var(--white)" : "none",
                                                paddingBottom: "10px"
                                            }}>
                                                <p onClick={() => window.location.href = e.url}>
                                                    {e.name}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
                <div className="corner-text" onClick={()=> window.location.href = "https://compras.biofemme.com.ec/productos/"}>
                    <p>PRODUCTOS BIOFEMME</p>
                    <Icon className="corner-icon" path={mdiArrowRightThin} size={1}/>
                </div>
            </ul>
        </div>
    );
}

export default ProductDropdown;
