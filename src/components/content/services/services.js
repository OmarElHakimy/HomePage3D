import React from 'react';

import img1 from "../../../assets/service1.png";
import img2 from "../../../assets/service2.png";
import img3 from "../../../assets/service3.png";
import img4 from "../../../assets/service4.png";
import Service from "../../service/service";

const NosServices = () => {

    return (
        <div style={{marginBottom: "200px"}}>
            <div style={{marginLeft:"250px", marginRight:"250px"}}>
                <div className='row' style={{marginBottom:"200px"}}>
                    <div className='col-6 mx-auto' style={{width: "440px", height: "350px"}}>
                        <Service src={img1} title="Bibliothéque Virtuelle">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Service>
                    </div>
                    <div className='col-6 mx-auto' style={{width: "440px", height: "350px"}}>
                        <Service src={img2} title="Mapping">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Service>
                    </div>
                </div>
                <div className='row'> 
                    <div className='col-6 mx-auto' style={{width: "440px", height: "350px"}}>
                        <Service src={img3} title="Forum - Chat">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Service>
                    </div>
                    <div className='col-6 mx-auto' style={{width: "440px", height: "350px"}}>
                        <Service src={img4} title="Médiathéque">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Service>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NosServices ;