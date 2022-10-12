import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

import Button from "../components/button/button";

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
        <motion.div ref={ref} animate={controls} initial="hidden" variants={Variants} style={{marginLeft: "20px", marginRight: "20px", marginBottom: "50px"}}>
            <div className='row' style={{
                width: "100%", 
                padding: "10px",
                borderRadius:"20px", 
                backgroundColor:"#1995AD", 
                background: "rgb(25,149,173)",
                background: "linear-gradient(90deg, rgba(25,149,173,1) 9%, rgba(161,214,226,1) 100%)"
            }}>
                <div className='col-12'>
                    <h5 className='text-white text-center fw-bold'>Association Marocaine de Solidarité et de Développement (AMSED)</h5>
                </div>
                <div className='col-12 mx-auto text-center my-auto'>
                    <Button href="#" style={{fontWeight: "bold", color: "black", backgroundColor:"white"}}>Contactez-Nous</Button>
                </div>
            </div>
        </motion.div>
    )
}

export default PreFooter ;