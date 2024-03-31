import React from 'react'
import "./Properties.css"
import icon1 from "../../Assests/63-home 1.png"
import icon2 from "../../Assests/63-home 2.png"
import icon3 from "../../Assests/63-home 3.png"
import icon4 from "../../Assests/63-home 4.png"
const Properties = () => {
  return (
    <div>
      <div class="text">
      <h1>Properties By Area</h1>
      <p>Lorem ipsum dolor sit amet consectetur lfdjf  does it make some thdng woerds adipisicing elit.<br/> Autem tempora odit, libero mollitia dolor nulla optio voluptate.</p>
     </div>

    <div class="read-more-card">
        <div class="container">
            <input type="checkbox" id="ch"/>
            <img src={icon1} alt=""/>
            <h4>sell your home</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div class="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero magnam architecto nostrum fugiat ratione placeat suscipit, quaerat repellendus at.</p>
            </div>
             <label for="ch">read more</label>
             <label for="ch">read less</label>
        </div>
        <div class="container">
            <input type="checkbox" id="ch"/>
            <img src={icon2} alt=""/>
            <h4>rent your home</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div class="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero magnam architecto nostrum fugiat ratione placeat suscipit, quaerat repellendus at.</p>
            </div>
             <label for="ch">read more</label>
             <label for="ch">read less</label>
        </div>
        <div class="container">
            <input type="checkbox" id="ch"/>
            <img src={icon3} alt=""/>
            <h4>buy your home</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div class="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero magnam architecto nostrum fugiat ratione placeat suscipit, quaerat repellendus at.</p>
            </div>
             <label for="ch">read more</label>
             <label for="ch">read less</label>
        </div>
        <div class="container">
            <input type="checkbox" id="ch"/>
            <img src={icon4} alt=""/>
            <h4>free marketing</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div class="content">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero magnam architecto nostrum fugiat ratione placeat suscipit, quaerat repellendus at.</p>
            </div>
             <label for="ch">read more</label>
             <label for="ch">read less</label>
        </div>
    </div>
    </div>
  )
}

export default Properties
