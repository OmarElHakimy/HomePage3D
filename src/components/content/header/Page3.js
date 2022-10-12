import React from 'react';
import img from '../../../assets/3D/page3/plan.png';
import img1 from "../../../assets/3D/page3/Perso1.png";
import img2 from "../../../assets/3D/page3/Perso2.png";
import img3 from "../../../assets/3D/page3/Perso3.png";
import img4 from "../../../assets/3D/page3/Perso4.png";
import msg1 from "../../../assets/3D/page3/msg.png";
import msg2 from "../../../assets/3D/page3/msg2.png";
import main from '../../../assets/3D/page3/main.png';
import {motion} from 'framer-motion';
import Button from "../../button/d3Button";

const animation = {
    animationOne:{
        scale: [1, 0.9, 1], 
        transition: {scale: {repeat: Infinity, duration: 1}} 
    },
    animationTwo:{
        x:[-10, 10, -10],
        transition:{
            x:{
                repeat: Infinity,
                duration: 0.8,
            }
        }
    },
    animationThree:{
        scale:[1, 0.9, 1],
        transition:{
            scale:{
                repeat: Infinity,
                yoyo: Infinity
            }
        }
    },
    animationFour:{
        x:[-4, 4, -4],
        transition:{
            x:{
                repeat: Infinity,
                yoyo: Infinity
            }
        }
    }
}

const Page = () => {
    return (
        <div>
            <img src={main} alt="img" className='main' style={{height:"100%", width:"100%"}}/>
            <img src={img} alt="img" className='img' style={{height:"100%", width:"100%", position: "relative"}}/>
            <motion.img src={img1}
                variants={animation}
                whileHover="animationTwo"
                className='img' 
                style={{height:"160px", width:"70px", position: "absolute", right: "200px", top: "280px"}}
            />
            <motion.img src={img2}
            variants={animation}
            whileHover="animationOne"
            className='img' 
            style={{height:"130px", width:"130px", position: "absolute", right: "350px", top: "310px"}}
            />
            <motion.img src={img3}
                variants={animation}
                whileHover="animationOne"
                className='img' 
                style={{height:"120px", width:"80px", position: "absolute", left: "60px", top: "315px"}}
            />
            <motion.img src={img4}
            variants={animation}
            whileHover="animationOne"
            className='img' 
            style={{height:"120px", width:"120px", position: "absolute", right: "200px", top: "102px"}}
            />
            <motion.img src={msg1}
                variants={animation}
                animate="animationFour"
                className='img' 
                style={{height:"40px", width:"50px", position: "absolute", left: "70px", top: "270px"}}
            />
            <motion.img src={msg2}
            variants={animation}
            animate="animationThree"
            className='img' 
            style={{height:"30px", width:"30px", position: "absolute", right: "260px", top: "100px"}}
            />
            <Button href="#">ESPACE COMMUNAUTÉS</Button> 
        </div>
    )
}

export default Page;