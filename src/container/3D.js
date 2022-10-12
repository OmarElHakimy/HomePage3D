import React, {useState, lazy, Suspense} from 'react';
import Loading from "../HOC/Loading";
import Test from "./3D/Test"
const Test2 = lazy(() => import('./3D/Test2'));
const Test3 = lazy(() => import('./3D/Test3'));

const Content = () => {
    const [width, setWidth] = useState(document.body.clientWidth);
    let Frame = null;
  
    window.addEventListener("resize", function(event) {
      setWidth(document.body.clientWidth);
    });
    if(width >= 1356){
      Frame = <Test/> ;
    }else if (width >= 1136 && width <= 1355){
      Frame = <Test3/> ;
    }else if (width < 1136){
      console.log("alright", width);
      Frame = <Test2/> ;
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