import preloader from "../../assets/images/motion-blur-2.svg";
import React from "react";

export const Preloader = () => {
    return (
        <div style={{backgroundColor: "E0F7FA", width: '100px', height: '100px'}}>
            <img src={preloader} alt=""/>
        </div>
    )
}