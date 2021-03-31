import React ,{useState} from 'react';



function FunctDemo(props){  // does not change.. props



    const data ={
        name:"ABC",
        age:56
    }

    const [count,setCount]=useState(0);
    const [toggle, setToggle]=useState('hide');
 return(
     <div>
         <button  onClick={()=>setToggle((toggle=='show')? 'hide':'show')}>Click me</button>
 <h2 className={toggle}>Welcome,Nitin</h2>
     </div>
 )
}

export default FunctDemo;
