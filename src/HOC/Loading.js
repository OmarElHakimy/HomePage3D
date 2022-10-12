import React from "react";
import './Loading.css';

const Loading = () => {

    return (
        <div className="container">
            <i className="spinner-border text-info loading" style={{ width: "20rem", height: "20rem"}}></i>
        </div>
        
    )
}

export default Loading;