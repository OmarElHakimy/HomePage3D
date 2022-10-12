    import React from 'react';
    import {ScrollContainer, ScrollPage, Animator, batch, MoveOut, MoveIn, Sticky, FadeOut} from 'react-scroll-motion';

    import Page1 from "../../components/content/header/Page1";
    import Page2 from "../../components/content/header/Page2";
    import Page3 from "../../components/content/header/Page3";
    import Page5 from "../../components/content/header/Page5";
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
                            <Page1/>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={3}>
                        <Animator animation={batch(Sticky(),MoveIn(1000, -500), MoveOut(-1000, -500))}> 
                            <Page2/>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={4}>
                        <Animator animation={batch(Sticky(), MoveIn(1000, 500), MoveOut(0, -500))}> 
                            <Page3/>
                        </Animator>
                    </ScrollPage>
                    {/* <ScrollPage page={5}>
                        <Animator animation={batch(Sticky(),MoveIn(0, 500), MoveOut(0, -500))}> 
                            <Page5/>
                        </Animator>
                    </ScrollPage> */}
                </ScrollContainer>
            </>

        )
    }

    export default Test;