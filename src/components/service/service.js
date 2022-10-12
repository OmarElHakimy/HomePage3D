import { useAnimation, motion } from 'framer-motion';
import React, {useEffect} from 'react';
import {useInView} from "react-intersection-observer";

const horVariants = {
    move: {y:-35, opacity: 1, transition: {duration: 0.5}},
    stable: {y: 0, opacity: 0.6}
}


const Service = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        console.log(inView);
        if(inView){
            controls.start("move");
        }else{
            controls.start("stable");
        }
    }, [controls, inView])

    return (
        <div>
            <motion.img whileHover={{y:[0, -5, 0],transition:{y:{repeat: Infinity,duration: 1.5,}}}} src={props.src} style={{height: "80%", width: "100%"}}/>
            <motion.div ref={ref} animate={controls} initial="stable" variants={horVariants} className='bg-white p-2 rounded-5'>
                <p className='text-center fs-5 fw-bolder pt-2' style={{color: "#1995AD"}}>{props.title}</p>
                <p className='text-center'>{props.children}</p>
            </motion.div>
        </div>
    )
}

export default Service ;