import React from 'react';
import "./button.css";
import {motion} from "framer-motion";

const animation = {
    animation:{
        rotate: [0, 180], 
        transition: {scale: {repeat: Infinity, duration: 1}} 
    }
}

const Button = (props) => {

    return (
        <motion.a 
            whileHover={{borderRadius: "20px 20px 20px 20px", backgroundColor:"#A1D6E2"}}
            href={props.href} 
            style={{
                borderRadius: "5px 5px 5px 5px",
                paddingTop:"8px",
                display: "inline-block", 
                textDecoration: "none",
                backgroundColor:"#1995AD"
            }}
            className={props.className}
        >
            <h1 className='px-3 text-dark' style={{fontSize:"20px", ...props.style}}>{props.children}</h1>
        </motion.a>
    )
}

export default Button ;