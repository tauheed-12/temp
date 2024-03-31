import React from 'react'
import "./Footer.css"
import footimg from "../../Assests/logonav.jpg"
const Footer = () => {
  return (
    <div class="footer">
        <div class="left">
            <div class="logo">
                <img src={footimg} alt=""/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Dolore sequi suscipit, neque beatae voluptatibus aut!</p>
            <div class="socialmediahandle">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <span>&copy; All rights are reserrved ezStay</span>
            </div>
        </div>
        <div class="right">
            <div class="tour eq">
                <h3>take a tour</h3>
                <a href="">Features</a>
                <a href="">partners</a>
                <a href="">pricing</a>
                <a href="">product</a>
                <a href="">support</a>
            </div>
            <div class="company eq">
                <h3>our company</h3>
                <a href="">about us</a>
                <a href="">agent</a>
                <a href="">blog</a>
                <a href="">media</a>
                <a href="">contact us</a>
            </div>
            <div class="sub eq">
                <h3>subscribe</h3>
                <p>Lorem ipsum dolor sit,<br/> amet consectetur adipisicing elit.</p>
                <input type="email" value="" placeholder="email address"/>
            </div>
        </div>
    </div>
  )
}

export default Footer
