import React from 'react';
import Title from "../components/content/title";
import ChifresCase from "../components/chifresCase/chifresCase";
const AmsedChifres = () => {

    return (
        <div>
            <div style={{marginLeft: "20px", marginRight: "20px", marginBottom: "50px"}}>
                <Title title="AMSED EN CHIFRES">Plus de 18.000 Marocains vivent avec le VIH à fin juin 2021</Title>
                <div className='row mt-5'>
                    <div className='col-12 my-2'>
                        <ChifresCase numbers="187" title="TOTAL COUNTRIES" style={{backgroundColor: "#1995AD", width: "100%"}}/>
                    </div>
                    <div className='col-12 my-2'>
                        <ChifresCase numbers="1,051,428" title="CONFIRMED CASES" style={{backgroundColor: "#A1D6E2", width: "100%"}}/>
                    </div>
                    <div className='col-12 my-2'>
                        <ChifresCase numbers="512,311" title="DEATHS" style={{backgroundColor: "#1995AD", width: "100%"}}/>
                    </div>
                    <div className='col-12 my-2'>
                        <ChifresCase numbers="545,101" title="RECOVERED" style={{backgroundColor: "#A1D6E2", width: "100%"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmsedChifres ;