import React, { Fragment,useState} from 'react';

function FuncDemo(props){
    const data = {
        name:"XYZ",
        age:"123"
    }
    const state ={
        count:0
    }
    const [count, setstate] = useState();  // hooks

    
    return(
        <Fragment>
                <div onClick={() => setstate((count)? 0:1)}>Hello, {props.name} {count}</div>
        </Fragment>
       
    )
}

export default FuncDemo;