import React from 'react';
import {ScrollContainer, ScrollPage, Animator, batch, MoveOut, MoveIn, Sticky, FadeOut} from 'react-scroll-motion';

import page1 from "../../assets/3D/page1/main.png";
import page2 from "../../assets/3D/page2/main.png";
import page3 from "../../assets/3D/page3/main.png";
import Page5 from "../../components/content/header/Page5";
import Button from "../../components/button/d3Button";
import "./pages.css";

const Test = () => {
    
    return (
        <>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -500))}> 
                        
                    </Animator>
                </ScrollPage>
                <ScrollPage page={1}>
                    <Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(0, -500))}> 
                        <Page5/>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={2} style={{backgoundColor: "black"}}>
                    <Animator animation={batch(Sticky(), MoveIn(0, 1000), MoveOut(-1000, 500))}> 
                        <img src={page1} style={{width: "100%", height:"100%"}}/>
                        <Button href="#">FORUM CHAT</Button>
                    </Animator>
                </ScrollPage>
                <ScrollPage page={3}>
                    <Animator animation={batch(Sticky(),MoveIn(1000, -500), MoveOut(-1000, -500))}> 
                        <img src={page2} style={{width: "100%", height:"100%"}}/>
                        <Button href="#" className="my-auto float-end">ESPACE ASSOCIATION</Button> 
                    </Animator>
                </ScrollPage>
                <ScrollPage page={4}>
                    <Animator animation={batch(Sticky(), MoveIn(1000, 500), MoveOut(0, -500))}> 
                        <img src={page3} style={{width: "100%", height:"100%"}}/>
                        <Button href="#">ESPACE COMMUNAUTÉS</Button> 
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </>

    )
}

export default Test;