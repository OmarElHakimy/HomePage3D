import React from "react";
import Button from "../components/button/button"

import headerLogo from "../assets/intecollab.png";
const Header = () => {
    return (
        <div className="container-fuild row text-white" style={{backgroundColor: "#A1D6E2", marginBottom: "50px"}}>
            <div className="col-md-6" style={{marginTop : "100px"}}>
                <div style={{marginLeft : "150px"}}>
                    <p className="fw-bold">— Platform Communication Interactive</p>
                </div>
                <div className="fw-bold fs-1" style={{marginLeft : "150px", marginBottom : "50px"}}>
                    <p className="lh-1">
                        AMSED <br/>
                        INTERCOLLAB
                    </p>
                </div>
                <div className="font-monospace fw-bold" style={{marginLeft : "150px"}}>
                    <p>La technologie au service des communautés</p>
                    <p>Un environement sécurisé et confidentiel </p>
                    <p>Partage, Echange et dialogue communaitaire</p>
                </div>
                <div style={{marginLeft : "150px"}}>
                <Button href="#" style={{color: "white", backgroundColor: "#1995AD"}}>A Props</Button>
                </div>
            </div>
            <div className="col-md-6" style={{padding: "0"}}>
                <img src={headerLogo} style={{width: "100%", height: "100%"}}/>
            </div>
        </div>
    )
}

export default Header ;