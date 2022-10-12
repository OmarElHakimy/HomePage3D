import React from 'react';
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
            whileHover={{borderRadius: "40px 10px 40px 40px"}}
            href={props.href} style={{
            display: "inline-block", 
            textDecoration: "none",
            padding:"10px 35px",
            borderRadius: "40px 40px 40px 10px",
            ...props.style
        }}
        className="my-auto fw-bold"
        >
            {props.children}
        </motion.a>
    )
}

export default Button ;