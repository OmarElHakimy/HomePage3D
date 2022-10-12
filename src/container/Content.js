import React, {useState, lazy, Suspense} from "react";

import NosServices from "../components/content/services/nosServices";
import Services from "../components/content/services/services";
import StaySafe from "../components/content/services/staySafe";
import AmsedChifres from "../components/content/services/amsedChifres";
import FAQ from "../components/content/services/FAQ";
import PreFooter from "../components/content/footer/preFooter";
import Loading from "../HOC/Loading";
import Header from "../container/header";
import Three from "../container/3D";

const ServicesTab = lazy(() => import('../componentsMobi/servicesTab'));
const ChifresMobi = lazy(() => import('../componentsMobi/amsedChifresMobi'));
const NosServicesMobi = lazy(() => import('../componentsMobi/nosServicesMobi'));
const HeaderMobi = lazy(() => import('../componentsMobi/headerMobi'));
const Title = lazy(() => import('../components/content/title'));
const StaySafeMobi = lazy(() => import('../componentsMobi/staySafeMobi'));
const PreFooterMobi = lazy(() => import('../componentsMobi/preFooterMobi'));
const ServicesMobi = lazy(() => import('../componentsMobi/servicesMobi'));
const FAQMobi = lazy(() => import('../componentsMobi/FAQMobi'));

const Content = () => {
    const [width, setWidth] = useState(document.body.clientWidth);
    let Frame = null;
  
    window.addEventListener("resize", function(event) {
      setWidth(document.body.clientWidth);
    });
    if(width >= 1356){
      Frame = (
        <div>
            <Header/>
            <Title title="Les espaces communautés">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
            <Three/>
            <NosServices/>
            <Services/>
            <AmsedChifres/>
            <StaySafe/>
            <FAQ/>
            <PreFooter/>
        </div>
      );
    }else if (width >= 1136 && width <= 1355){
      console.log("alright", width);
      Frame = (
        <div>
            <Header/>
            <Title title="Les espaces communautés">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
            <Three/>
            <NosServices/>
            <ServicesTab/>
            <AmsedChifres/>
            <StaySafe/>
            <FAQ/>
            <PreFooter/>
        </div>    
      ) ;
    }else if (width < 1136){
      Frame = (
        <div>
            <HeaderMobi/>
            <Title title="Les espaces communautés">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
            <Three/>
            <NosServicesMobi/>
            <ServicesMobi/>
            <ChifresMobi/>
            <StaySafeMobi/>
            <FAQMobi/>
            <PreFooterMobi/>
        </div>    
      ) ;
    }
    
    return (
        <div>
            <Suspense fallback={<Loading />}>
                {Frame}
            </Suspense>
        </div>
    )
}

export default Content ;