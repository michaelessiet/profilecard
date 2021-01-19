import React from "react"
import "./styles.css"
import circle2 from "../images/bg-pattern-bottom.svg"
import circle1 from "../images/bg-pattern-top.svg"
import victor from "../images/image-victor.jpg"

const IndexPage = () => (
  <div className="general flex">
    <link
      href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <div className="circle1 absolute">
      <img className="circles" src={circle1} alt="" />
    </div>
    <div className="circle2 absolute">
      <img className="circles" src={circle2} alt="" />
    </div>
    <div className="card">
      <div className="cardbg"></div>
      <div className="cardimage">
        <img src={victor} className="victor" alt="" />
      </div>
      <br />
      <br/>
      <div className="card-content">
        <h3 className="name flex">
          Victor Crest <h3 className="age">26</h3>
        </h3>
      </div>
      <br />
      <br/>
      <h4 className="london">London</h4>
      <br />
      <br />
      <br/>
      <div className='hr' />
      <br />
      <div className="card-footer">
        <div className="footer-item">
          <h4>80k</h4>
          <p>Followers</p>
        </div>
        <div className="footer-item">
          <h4>803k</h4>
          <p>Likes</p>
        </div>
        <div className="footer-item">
          <h4>1.4k</h4>
          <p>Photos</p>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>Challenge by <a href="https://www.frontendmentor.io/solutions">Frontendmentor</a>. Coded by <a href="https://profilecard-black.vercel.app/">Michael Essiet</a></p>
    </div>
  </div>
)

export default IndexPage
