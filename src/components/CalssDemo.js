import React,{Component} from 'react';

 class CalssDemo extends Component{
    // ek min 
     constructor(props){
         super(props);
         this.state={
             name:"XYZ",
             age:"20"
         }
     }
     render(){
         return(
             <div>
                 <h2  onClick={()=>{this.setState({this.state.name:344})}}>Welcome, {this.state.age}</h2>
             </div>
         )
    }

}
export default  CalssDemo;