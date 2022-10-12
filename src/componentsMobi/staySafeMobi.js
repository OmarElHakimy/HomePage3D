import React from 'react';

import img1 from "../assets/staySafe1.png";
import img2 from "../assets/staySafe2.jpg";
import Button from "../components/button/button";

const StaySafeMobi = () => {

    return (
        <div>
            <div className='row' style={{marginLeft: "20px",  marginRight: "20px",marginTop:"50px", marginBottom:"80px"}}>
                <div className='col-12'>
                    <div style={{width: "100%", height: "400px"}}>
                        <img src={img1} style={{height: "100%", width: "100%"}}/>
                    </div>
                </div>
                <div className='col-12'>
                    <div style={{width: "100%", height: "300px"}}>
                        <p className="fw-ligh" style={{color: "#1995AD"}}>— Stay Safe</p>
                        <p className='fs-2 fw-bolder' style={{color: "#1995AD"}}>LA LUTTE CONTRE SIDA</p>
                        <p className='fw-light'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                        <Button href="#" style={{color: "white", backgroundColor: "#1995AD"}}>Lire Plus</Button>
                    </div>
                </div>
            </div>
            <div className='row' style={{marginLeft: "20px",  marginRight: "20px",marginBottom:"50px"}}>
                <div className='col-12'>
                    <div style={{width: "100%", height: "400px"}}>
                        <img src={img2} style={{height: "100%", width: "100%"}}/>
                    </div>
                </div>
                <div className='col-12'>
                    <div style={{width: "100%", height: "300px"}}>
                        <p className="fw-light" style={{color: "#1995AD"}}>— Stay Safe</p>
                        <p className='fs-2 fw-bolder' style={{color: "#1995AD"}}>LA LUTTE CONTRE LA TUBERCULOSE</p>
                        <p className='fw-light'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                        <Button href="#" style={{color: "white", backgroundColor: "#1995AD"}}>Lire Plus</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StaySafeMobi ;