import React from 'react';
import "./amsedChifres.css";
import Title from "../title";
import ChifresCase from "../../chifresCase/chifresCase";

const AmsedChifres = () => {

    return (
        <div>
            <div style={{marginLeft: "250px", marginRight: "250px", marginBottom: "100px"}}>
                <Title title="AMSED EN CHIFRES">Plus de 18.000 Marocains vivent avec le VIH à fin juin 2021</Title>
                <div className='row mt-5'>
                    <div className='col-3'>
                        <ChifresCase numbers="187" title="TOTAL COUNTRIES" style={{backgroundColor: "#1995AD"}}/>
                    </div>
                    <div className='col-3'>
                        <ChifresCase numbers="1,051,428" title="CONFIRMED CASES" style={{backgroundColor: "#A1D6E2"}}/>
                    </div>
                    <div className='col-3'>
                        <ChifresCase numbers="512,311" title="DEATHS" style={{backgroundColor: "#1995AD"}}/>
                    </div>
                    <div className='col-3'>
                        <ChifresCase numbers="545,101" title="RECOVERED" style={{backgroundColor: "#A1D6E2"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmsedChifres ;