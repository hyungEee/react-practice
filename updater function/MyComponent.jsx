import React,{useState} from "react";
function MyComponent(){

    const [count,setCount]=useState(0);

    function increment(){

        // updater function
        // setCount를 여러번 호출해봤자 업데이트는 마지막 한번만 이루어짐.
        // 결국 previous state에 한번만 업데이트 되는 결과 발생.
        // 이는 arrow function을 사용하여 count를 rename해주고 setCount해주면 해결된다.

        setCount(c=>c+1);
        setCount(c=>c+1);
        setCount(c=>c+1);
    }
    function decrement(){
        setCount(c=>c-1);
        setCount(c=>c-1);
        setCount(c=>c-1);
    }
    function reset(){
        setCount(0);
    }


    return( <div>
                <p>Count: {count}</p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
    );
}

export default MyComponent