import React from "react"
import image from '../images/slider-1.jpg'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

import '../styles.css'

export default () => <div className="indexPage">
  <NavBar />
  <div className="container">
    <img src={image} className="image" alt="" ></img>
  </div>
  <div className="about">
    <div className="box">
      <h1 className="title">About Us</h1>
      <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</h5>
    </div>
    <div className="box">
      <h1 className="title">Who We Are</h1>
      <h5>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</h5>
    </div>
  </div>
  <Footer />
</div>
