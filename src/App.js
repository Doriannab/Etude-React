import React, { useState, useEffect, useRef } from "react";
import Pictures from "./Components/Pictures";

function App(){


const [title, setTitle] = useState('coucou les amis');
const [show, setShow] = useState(false);
const isShowInitialize = useRef(false);

useEffect(() => console.log('Composant App Monté'), []);
useEffect(() => {
   if (isShowInitialize.current) {
    console.log('mis à jour')
   } else {
       isShowInitialize.current = true;
   }
}, [show]);


function handleClick(){
  setShow(!show);
}


  return(<div>
  {console.log('JSX Rendered')}
  <h1 className="text-4xl text-purple-700 my-5">{title}</h1>
    <button className="bg-purple-900 text-white rounded py-2 px-3" onClick={handleClick}>Click</button>

{show ? <Pictures /> : null}
  </div>
  ); } 



// class App extends React.Component{

// constructor(props){
//    super(props);
//    this.state = { show: false, title: 'coucou les amis'};
  
// }

// componentDidMount(){
 
//   // this.setState({title: 'le composant a bien été monté'})
// }


// componentDidUpdate() {
//   console.log('composant mis à jour')

// }

//   render(){
//     return <div>
//   <h1 className="text-4xl text-purple-700 my-5">{this.state.title}</h1>
//     <button className="bg-purple-900 text-white rounded py-2 px-3" onClick={() => this.setState({show: !this.state.show})}>Click</button>

// {
// this.state.show ?

// <Picture />
// : null
// }

//   </div>
    
   

//   }  
// }
  export default App;