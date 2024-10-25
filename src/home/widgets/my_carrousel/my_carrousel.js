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
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (imgList.current) {
            observer.observe(imgList.current);
        }

        return () => {
            if (imgList.current) {
                observer.unobserve(imgList.current);
            }
        };
    }, []);

    useEffect(() => {
        const listNode = imgList.current;
        const imgNode = listNode.querySelectorAll("li")[currentIdx];

        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    }, [currentIdx]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isVisible) {
                setCurrentIdx((idx) => (idx + 1) % data.length);
            }
        }, 6000);

        return () => clearInterval(interval);
    }, [isVisible]);

    const scrollToImage = (direction) => {
        if (isVisible) {
            if (direction === "prev") {
                setCurrentIdx((idx) => (idx === 0 ? data.length - 1 : idx - 1));
            } else {
                setCurrentIdx((idx) => (idx === data.length - 1 ? 0 : idx + 1));
            }
        }
    };

    return (
        <div className="my-carrousel">
            <div className="slider-container">
                <div className="leftArrow" onClick={(e) => {e.preventDefault(); scrollToImage("prev")}}>{"<"}</div>
                <div className="rightArrow" onClick={(e) => {e.preventDefault(); scrollToImage("next")}}>{">"}</div>
                <div className="container-images" ref={imgList}>
                    <ul style={{ display: "flex" }}>
                        {data.map((i, index) => (
                            <li
                                key={i.id}
                                style={{
                                    width: "100%",
                                }}
                            >
                                <img
                                    src={i.url}
                                    style={{ width: "auto", height: "436px" }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MyCarrousel;
