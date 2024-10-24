import "./my_carrousel.css";

import c1 from "./carrousel_images/NEW-Lifting-Serum-Carrousel.jpg";
import c2 from "./carrousel_images/Agua-Micelar-BioFemme-Carrousel.jpg";
import c3 from "./carrousel_images/CC-Cream-BioFemme-Carrousel.jpg";
import c4 from "./carrousel_images/Acne-Clear-Essentials-Carrousel.jpg";
import c5 from "./carrousel_images/Bio-Beauty-Oil-Carrousel.jpg";
import { useEffect, useRef, useState } from "react";

const data = [
    {id: 1, url: c1},
    {id: 2, url: c2},
    {id: 3, url: c3},
    {id: 4, url: c4},
    {id: 5, url: c5},
]



const MyCarrousel = () => {
    const imgList = useRef();
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const listNode = imgList.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIdx];

        if(imgNode){
            imgNode.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            })
        }
    },[currentIdx])

    const scrollToImage = (direction) => {

        if (direction === "prev") {
            setCurrentIdx(idx => {
                const isFirst = currentIdx === 0;
                return isFirst ? data.length - 1 : idx - 1;
            })
        } else {
            setCurrentIdx(idx => {
                const isLast = currentIdx === data.length - 1;
                return isLast ? 0 : idx + 1;
            })
        }
    }

    return(
        <div className="my-carrousel">
            <div className="slider-container">
                <div className="leftArrow" onClick={(e)=> {e.preventDefault(); scrollToImage('prev')}}>{"<"}</div>
                <div className="rightArrow" onClick={(e)=>{e.preventDefault(); scrollToImage('next')}}>{">"}</div>
                <div className="container-images">
                    <ul ref={imgList}>
                        {data.map((i) => {
                            return <li key= {i.id}>
                                <img
                                    src={i.url}
                                    style={{ width: "auto", height: "436px" }}
                                />
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default MyCarrousel;