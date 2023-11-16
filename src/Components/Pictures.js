import React, { Component, useEffect, useRef, useState } from 'react';
import Picture from './Picture';

export default function Pictures() {

    // const [myTimer, setMyTimer] = useState(null);
    const [images, setImages] = useState([
        'nor.png',
        'nor1.png',
        'nor2.png',
        'nor3.png'
    ]);

    const [image, setImage] = useState(null);




    
    function ImagesComponent(){
        return images.map((name, index) => 
        <Picture imageName={name}
         index={index} 
         key={index}
         handleRemove = {handleRemoveImage}
         />
        );
    }


    function handleRemoveImage(index){
        setImages(images.filter((image, i) => i != index));
    }


    function handleImageName(event){
        setImage(event.target.value);

    }


 function addImageName(){
    let newImages = [ ... images, image];
    setImages(newImages);
 }



    useEffect(() =>  {

      const myTimer = setInterval(() => {
        console.log('timer appelé');
       }, 1000);

         return () => clearInterval(myTimer)
    }, []);



    const fruitRef = useRef(null);


    // useEffect(() =>{
    //     inputToFocus.current.focus();
    // });

  return (
  <div className="container mx-auto">
      <div className="flex items-center justify-between ">
      <ImagesComponent />
    </div>

    <button onClick={()=>{
        fruitRef.current = 'pomme';

    }}>Cliquez ici pour générer un fruit</button>
            <div>
            {fruitRef.current}
            </div>

    <div className="mt-5">
        <input type="text" className="border border-gray-600 shadow rounded p-3 mr-2 outline-none" onChange={handleImageName}/>
        <button type="submit" className="bg-purple-400 text-white rounded p-3" onClick={addImageName} >Inscrire le nom d'un image</button>
    </div>
  </div>
  )
}

// export default class Picture extends Component {


//     constructor(props){
//         super(props);
//         this.state = {timer: null};

//     }


// componentDidMount(){
//     this.setState({
//         timer: setInterval(() => {
//           console.log('timer appelé');
//    }, 1000)});
   
// };


// componentWillUnmount(){
//     console.log('composant Picture démonté');
//    clearInterval(this.state.timer);
// };

//   render() {
//     return (
//         <img  className='w-40 mx-auto'src="nord2.png"></img>
//     )
//   }
// }
