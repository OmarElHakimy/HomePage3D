import React from 'react';
import img from '../../../assets/3D/page1/FlechDWN.png';
import {motion} from 'framer-motion';

const animation = {
    animationThree:{
        y:[-10, 10, -10],
        transition:{
            y:{
                repeat: Infinity,
                yoyo: Infinity
            }
        }
    }
}

const Page = () => {
    return (
        <div>
            <motion.img variants={animation} animate="animationThree" src={img} style={{marginLeft:"30%", marginTop:"200px", width:"120px", height:"200px"}}/>
                
        </div>
    )
}

export default Page;
