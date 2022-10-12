import React from 'react';
import Page1 from "../../components/content/header/Page1";
import Page2 from "../../components/content/header/Page2";
import Page3 from "../../components/content/header/Page3";
import "./pages.css";

const Test = () => {
    
    return (
            <div className='row' style={{marginBottom:"50px"}}>
                <div className='col-12 my-2 mx-auto'>
                    <Page1/>
                </div>        
                <div className='col-12 my-2 mx-auto'>
                    <Page2/>
                </div>        
                <div className='col-12 my-2 mx-auto'>
                    <Page3/>
                </div>       
            </div>            
    )
}

export default Test;