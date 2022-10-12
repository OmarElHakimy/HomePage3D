import React from 'react';
import {motion} from 'framer-motion';

import img from '../../../assets/3D/page2/plan.png';
import img1 from '../../../assets/3D/page2/Preso1.png';
import img2 from '../../../assets/3D/page2/Perso2.png';
import img3 from '../../../assets/3D/page2/Perso3.png';
import img4 from '../../../assets/3D/page2/Perso4.png';
import img5 from '../../../assets/3D/page2/Perso5.png';
import img6 from '../../../assets/3D/page2/Perso6.png';
import main from '../../../assets/3D/page2/main.png';
import Button from "../../button/d3Button";


const animation = {
    animationOne:{
        scale: [1, 0.9, 1], 
        transition: {scale: {repeat: Infinity, duration: 1}} 
    },
    animationTwo:{
        x:[-8, 8, -8],
        transition:{
            x:{
                repeat: Infinity,
                duration: 0.8,
            }
        }
    }
}

const Page = () => {
    return (
        <div>
            <img src={main} alt="img" className='main' style={{height:"100%", width:"100%"}}/>
            <img src={img} alt="img" className='img' style={{height:"100%", width:"100%", position: "relative"}}/>
            <motion.img src={img2}
            variants={animation}
            whileHover="animationTwo"
            className='img' 
            style={{height:"90px", width:"90px", position: "absolute", right: "100px", top: "190px"}}
            />
            <motion.img src={img1}
            variants={animation}
            whileHover="animationOne"
                className='img' 
                style={{height:"140px", width:"140px", position: "absolute", right: "100px", top: "250px"}}
            />
            <motion.img src={img3}
            variants={animation}
            whileHover="animationTwo"
            className='img' 
            style={{height:"80px", width:"70px", position: "absolute", left: "340px", top: "200px"}}
            />
            <motion.img src={img4}
            variants={animation}
            whileHover="animationOne"
            className='img' 
            style={{height:"150px", width:"130px", position: "absolute", left: "160px", top: "150px"}}
            />
            <motion.img src={img5}
            variants={animation}
            whileHover="animationOne"
                className='img' 
                style={{height:"140px", width:"140px", position: "absolute", left: "160px", top: "300px"}}
            />
            <motion.img src={img6}
            variants={animation}
            whileHover="animationOne"
            className='img' 
            style={{height:"140px", width:"130px", position: "absolute", left: "40px", top: "200px"}}
            />
            <Button href="#" className="my-auto float-end">ESPACE ASSOCIATION</Button> 
        </div>
    )
}

export default Page;