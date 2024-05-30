import React,{useState,useEffect} from "react";
function MyComponent(){

    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);
    
    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");

        return()=>{
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
        //return a cleanup function=>remove or free up resources
        //next render하기전, 또는 component unmounts의 상황에서 동작한다.
        //resource를 free up 함으로써 unexpected behavior를 방지해준다.

    },[]);

    useEffect(()=>{
        document.title=`Size: ${width} x ${height}`;
    },[width,height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

   return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}

export default MyComponent