import React,{useState,useEffect} from "react";
function MyComponent(){
    
   const [count, setCount]=useState(0);
   const [color,setColor]=useState("green");

   useEffect(()=>{
        document.title=`Count: ${count} ${color}`;
   },[count,color]);

   //useEffect없이 document.title=`Count: ${count} ${color}`;
   //코드를 작성해도 동일하게 동작하지만, useEffect를 써야하는 이유는
   //it keeps code more organized (정확히 코드가 언제 동작하는지 알 수 있게 해줌)
   //(every re-render, only on mount, on mount+value changes의 상황에서)
   //useEffect를 사용하지 않는다면, 해당 코드는 컴포넌트가 re-render되는 모든 상황마다 동작하므로
   //원치 않는 상황에 해당 코드가 동작하게 될 수 있다.

   function addCount(){
    setCount(c=>c+1);
   }

   function subtractCount(){
    setCount(c=>c-1);
   }

    function changeColor(){
        setColor(c=>c==="green"?"red":"green");
    }

    return( <>
                <p style={{color:color}}>Count: {count}</p>
                <button onClick={addCount}>Add</button>
                <button onClick={subtractCount}>Subtract</button><br/>
                <button onClick={changeColor}>Change Color</button>
            </>
    );
}

export default MyComponent