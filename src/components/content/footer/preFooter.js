import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

import Button from "../../button/button";
import img from "../../../assets/preFooter.png";

const animation = {
    animation:{
        scale: [1.1, 0.9, 1.1], 
        transition: {scale: {repeat: Infinity, duration: 1}} 
    }
}

const Variants = {
    visible: {opacity: 1, transition: {duration: 0.6}},
    hidden: {opacity: 0}
}

const PreFooter = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        console.log(inView);
        if(inView){
            controls.start("visible");
        }else{
            controls.start("hidden");
        }
    }, [controls, inView]);

    return ( 
        <motion.div ref={ref} animate={controls} initial="hidden" variants={Variants} style={{marginLeft: "280px", marginRight: "250px", marginBottom: "100px"}}>
            <div className='row' style={{
                width: "100%",
                padding: "20px", 
                borderRadius:"30px", 
                backgroundColor:"#1995AD", 
                background: "rgb(25,149,173)",
                background: "linear-gradient(90deg, rgba(25,149,173,1) 9%, rgba(161,214,226,1) 100%)",
                position: "relative"
            }}>
                <div className='col-7'>
                    <h4 className='text-white text-end fw-bold'>Association Marocaine de Solidarité et de Développement (AMSED)</h4>
                </div>
                <div className='col-5 my-auto'>
                    <Button href="#" style={{fontWeight: "bold", color: "black", backgroundColor:"white"}}>Contactez-Nous</Button>
                </div>
                <motion.img src={img}
                variants={animation}
                whileHover="animation"
                    className='img' 
                    style={{height:"150px", width:"150px", position: "absolute", right: "0px", top: "-75px"}}
                />
            </div>
        </motion.div>
    )
}

export default PreFooter ;