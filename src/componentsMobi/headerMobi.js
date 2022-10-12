import React from "react";
import Button from "../components/button/button";

import headerLogo from "../assets/intecollab.png";
const Header = () => {
    return (
        <div className="row text-white" style={{backgroundColor: "#A1D6E2", marginBottom: "10px"}}>
            <div className="col-12" style={{marginTop : "10px"}}>
                <div className="mx-auto">
                    <div>
                        <p className="text-center">— Platform Communication Interactive</p>
                    </div>
                    <div className="fw-bold fs-1 text-center" style={{marginBottom : "15px"}}>
                        <p className="lh-1">
                            AMSED <br/>
                            INTERCOLLAB
                        </p>
                    </div>
                    <div className="font-monospace text-center">
                        <p>La technologie au service des communautés</p>
                        <p>Un environement sécurisé et confidentiel </p>
                        <p>Partage, Echange et dialogue communaitaire</p>
                    </div>
                    <div>
                    <Button href="#" style={{color: "white", backgroundColor: "#1995AD", marginLeft: "40%"}}>A Props</Button>
                    </div>
                </div>
            </div>
            <div className="col-12" style={{marginTop: "10px"}}>
                <img className="mx-auto d-block" src={headerLogo} style={{width: "300px", height: "300px"}}/>
            </div>
        </div>
    )
}

export default Header ;