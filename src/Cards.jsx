import React, {useState} from 'react'
import img_hero_1 from "./Assets/image-product-1.jpg";
// import img_hero_2 from "./Assets/image-product-2.jpg";
// import img_hero_3 from "./Assets/image-product-3.jpg";
// import img_hero_4 from "./Assets/image-product-4.jpg";
// import img_hero_1_thumb from "./Assets/image-product-1-thumbnail.jpg"
// import img_hero_2_thumb from "./Assets/image-product-2-thumbnail.jpg"
// import img_hero_3_thumb from "./Assets/image-product-3-thumbnail.jpg"
// import img_hero_4_thumb from "./Assets/image-product-4-thumbnail.jpg"
import './Css/cards.css'

// const images = [img_hero_1, img_hero_2, img_hero_3, img_hero_4];
const images = [img_hero_1];


export default function Cards() {
    // const imageNoCurrent=0;
    let [imageNoCurrent, setImageNo] = useState(0);
    function NextImg() {
        if(imageNoCurrent < images.length-1 ){ 
            setImageNo(imageNoCurrent+1)
        }
        else{
            console.log("nothing");;
        }
    }

    function PrevImg() {
        if(imageNoCurrent > 0 ){ 
            setImageNo(imageNoCurrent-1)
        }
        else{
            console.log("nothing");
        }
    }

    function goToThatImage(id){
      setImageNo(id)
  }
  return (
    <div className="cards-container">
    <div className="hero-img-div">
      <svg
      onClick={PrevImg}
        className="hero-img-button button-left"
        width="12"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1 3 9l8 8"
          stroke="#1D2026"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
      <img className="hero-img" src={images[imageNoCurrent]} alt="" />
      <svg
        onClick={NextImg}
        className="hero-img-button button-right"
        width="13"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </div>
    {/* <div className="hero-img-thumb-container">
        <img className="hero-img-thumb" onClick={() => goToThatImage(0)} src={img_hero_1_thumb} alt="" />
        <img className="hero-img-thumb" onClick={() => goToThatImage(1)} src={img_hero_2_thumb} alt="" />
        <img className="hero-img-thumb" onClick={() => goToThatImage(2)} src={img_hero_3_thumb} alt="" />
        <img className="hero-img-thumb" onClick={() => goToThatImage(3)} src={img_hero_4_thumb} alt="" />
    </div> */}
    </div>
  );
}

