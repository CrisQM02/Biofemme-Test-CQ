import logos from "../assets/images/logos-white.png";

const MyFooter = ()=>{
    return(
        <div className="footer">
            <div className="footer-about">
                <h1>SOBRE BIOFEMME</h1>
                <div className="separator"></div>
                <h1>CONTACTO</h1>
            </div>
            <div className="footer-credits">
                <div className="credits-content">
                    <div className="bio-info">
                        <img
                            src={logos}
                            alt="logos"
                            className="logos-img"
                            style={{ width: "480px", height: "auto" }}/>
                        <p>BIOFEMME es una marca elaborada por CRESENS DERMOCOSMÉTICA y distribuida por LABORATORIOS ROCNARF.</p>
                    </div>
                    <div className="online-shop">
                        <h1>TIENDA ONLINE</h1>
                    </div>
                    <div className="compra-segura">
                        <h1>COMPRA SEGURA</h1>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2024 | BioFemme</p>
            </div>
        </div>
    )
}

export default MyFooter;