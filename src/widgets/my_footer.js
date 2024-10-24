import "./my_footer.css";

import logos from "../assets/images/logos-white.png";
import payLogo from "../assets/images/paymentez-logo-1.png";

const MyFooter = ()=>{
    return(
        <div className="footer">
            <div className="footer-about">
                <a
                    className="about-biofemme-link"
                    href="https://biofemme.com.ec/#sobre-biofemme"
                    rel="noopener noreferrer"
                >
                    SOBRE BIOFEMME
                </a>
                <div className="separator"></div>
                <a
                    className="contact-link"
                    href="https://biofemme.com.ec/contacto/"
                    rel="noopener noreferrer"
                >
                    CONTACTO
                </a>
            </div>
            <div className="footer-credits">
                <div className="credits-content">
                    <div className="bio-info">
                        <img
                            src={logos}
                            alt="logos"
                            className="logos-img"
                            style={{ width: "360px", height: "auto" }}/>
                        <p>BIOFEMME es una marca elaborada por CRESENS DERMOCOSMÉTICA y distribuida por LABORATORIOS ROCNARF.</p>
                    </div>
                    <div className="online-shop">
                        <h1>TIENDA ONLINE</h1>
                            <a
                                className="account-link"
                                href="https://compras.biofemme.com.ec/mi-cuenta/"
                                rel="noopener noreferrer"
                            >
                                Mi cuenta
                            </a>
                            <a
                                className="terms-link"
                                href="https://compras.biofemme.com.ec/terminos-y-condiciones/"
                                rel="noopener noreferrer"
                            >
                                Términos y condiciones
                            </a>
                            <a
                                className="politics-link"
                                href="https://compras.biofemme.com.ec/terminos-y-condiciones/"
                                rel="noopener noreferrer"
                            >
                                Políticas de envíos
                            </a>
                    </div>
                    <div className="compra-segura">
                        <h1>COMPRA SEGURA</h1>
                        <img
                            src={payLogo}
                            alt="pay-logos"
                            className="pay-logos-img"
                            style={{ width: "170px", height: "auto" }}/>
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