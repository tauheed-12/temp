import React from 'react';
import img1 from "../../Assests/headerLeftimg.jpeg";
import img2 from "../../Assests/img2Left.jpeg";
import img3 from "../../Assests/img3Left.jpeg";
import landingimg from "../../Assests/headerimg.png"
import "./Hero.css"
const Hero = () => {
  return (
    <div className="Hero">
      <div className='flex'>
        <div className="left">
        <h1>Easy way to find a perfect property</h1>
        <p>We provide a complete service for the sale, purchase or rental of real estate</p>
        <div class="searchtype">
            <h3>buy</h3>
            <h3>rent</h3>
        </div>
        <form id="">
            <label for="location"></label>
            <input type="text" name="" id="location" placeholder="select your city"/>
            <label for="number"></label>
            <input type="number" placeholder="upto range" id="number"/>
            <label for="type"></label>
            <select name="prop-type" id="type">
                <option value="">x</option>
                <option value="">r</option>
                <option value="">y</option>
                <option value="">z</option>
                <option value="">u</option>
            </select>
            <button >apply</button>
        </form>
       </div>
      <div className="right">
        <img src={img1} alt=""/>
        <img src={img2} alt="img"/>
        <img src={img3} alt=""/>
      </div>
      </div>
      <div className="landing">
            <img src={landingimg}></img>
      </div>
      </div>
     
  );
}

export default Hero;
