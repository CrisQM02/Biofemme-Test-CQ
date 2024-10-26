import { mdiAccountCircleOutline, mdiFacebook, mdiInstagram, mdiStore } from "@mdi/js";
import "./my_app_bar.css";
import Icon from "@mdi/react";
import tiktokIcon from "../assets/svg/tiktok.svg"; 

const MyAppBar = () =>{
return(
    <div className="my-app-bar">
        <div className="social-net-icons">
            <Icon className="mdi-icons" path={mdiFacebook} size={0.8} onClick={()=>window.open("https://www.facebook.com/BioFemmeEc","_blank")}/>
            <Icon className="mdi-icons" path={mdiInstagram} size={0.8} onClick={()=>window.open("https://www.instagram.com/biofemme_ec/","_blank")}/>
            <img src={tiktokIcon} alt="tiktok" className="tiktok-icon" onClick={()=>window.open("https://www.tiktok.com/@biofemme_ec","_blank")}/>
        </div>
        <div className="bar-items"> 
            <div className="my-account">
                MI CUENTA
                <a
                    className="my-account-link"
                    href="https://compras.biofemme.com.ec/mi-cuenta/"
                    rel="noopener noreferrer"
                >
                    <Icon className="mdi-icons" path={mdiAccountCircleOutline} size={0.8}/>
                </a>
            </div>
            <div className="sale-points">
            <Icon className="mdi-icons" path={mdiStore} size={0.8}/>
                PUNTOS DE VENTA
            </div>
        </div>
    </div>
)
}

export default MyAppBar;