import React, {useEffect} from 'react';
import {useAnimation, motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

import img2 from "../../assets/staySafe2.jpg";
import Button from "../button/button";

const rightVariants = {
    fixedRight: {x:0, opacity: 1, transition: {duration: 0.6}},
    right: {x:100, opacity: 0}
}

const NosServices = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        console.log(inView);
        if(inView){
            controls.start("fixedRight");
        }else{
            controls.start("right");
        }
    }, [controls, inView]);

    return (
        <div>
            <div style={{marginLeft:"250px", marginRight:"250px", marginBottom: "100px"}}>
                <div className='row' style={{marginBottom:"50px"}}>
                    <div className='col-6'>
                        <div style={{width: "100%", height: "300px"}}>
                            <p className="fw-light" style={{color: "#1995AD"}}>— Stay Safe</p>
                            <p className='fs-2 fw-bolder' style={{color: "#1995AD"}}>LA LUTTE CONTRE LA TUBERCULOSE</p>
                            <p className='fw-light'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            <Button href="#" style={{color: "white", backgroundColor: "#1995AD"}}>Lire Plus</Button>
                        </div>
                    </div>
                    <motion.div ref={ref} animate={controls} initial="right" variants={rightVariants} className='col-6'>
                        <div style={{width: "100%", height: "400px"}}>
                            <img src={img2} style={{height: "100%", width: "100%"}}/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default NosServices ;