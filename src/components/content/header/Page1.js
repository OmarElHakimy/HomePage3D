import React from 'react';
import img from '../../../assets/3D/page1/PLAN.png';
import perso1 from '../../../assets/3D/page1/Perso-1.png';
import perso2 from '../../../assets/3D/page1/Perso-2.png';
import perso3 from '../../../assets/3D/page1/Perso-3.png';
import perso4 from '../../../assets/3D/page1/Perso-4.png';
import perso5 from '../../../assets/3D/page1/Perso-5.png';
import sun from '../../../assets/3D/page1/sun.png';
import main from '../../../assets/3D/page1/main.png';
import {motion} from 'framer-motion';
import Button from "../../button/d3Button";
import Title from "../title";


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
        }
    }
    const Page = () => {
    return (
        <div>
            <img src={main} alt="img1" className='main' style={{height:"100%", width:"100%"}}/>
            <img src={img} alt="img2" className='img' style={{margin:"0", padding:"0", height:"100%", width:"100%", position: "relative"}}/>
            <motion.img src={perso4}
                variants={animation}
                whileHover="animationOne"
                className='img'
                alt="img3" 
                style={{height:"200px", width:"120px", position: "absolute", left: "60px", top: "220px"}}
            />
            <motion.img src={perso3}
                variants={animation}
                whileHover="animationOne"
                className='img' 
                alt="img4" 
                style={{height:"180px", width:"100px", position: "absolute", left: "200px", top: "240px"}}
            />
            <motion.img 
                variants={animation}
                whileHover="animationOne" 
                src={perso1} alt="img5" 
                className='img' 
                style={{height:"200px", width:"160px", position: "absolute", right: "100px", top: '120px'}}
            />
            <motion.img 
                variants={animation}
                whileHover="animationTwo" 
                src={perso2} alt="img6" 
                className='img' 

                style={{height:"140px", width:"90px", position: "absolute", right: "300px", top: '200px'}}
            />
            <motion.img 
                variants={animation}
                whileHover="animationTwo" 
                src={perso5} alt="img7" 
                className='img' 
                style={{height:"140px", width:"70px", position: "absolute", right: "150px", top: '260px'}}
            />
            <motion.img 
                variants={animation}
                animate="animationThree" 
                src={sun} alt="img8" 
                className='img' 
                style={{height:"80px", width:"80px", position: "absolute", left: "-50px", top: '50px'}}
            />
            <Button href="#">FORUM CHAT</Button> 
        </div>
    )
}

export default Page;