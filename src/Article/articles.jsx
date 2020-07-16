import React, { Component } from "react";
import "./article-style.css";
import drawer from "../images/drawers.jpg";
import avatar from "../images/avatar-michelle.jpg";
import share from "../images/icon-share.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest  from "../images/icon-pinterest.svg";




class Card extends Component{

  mediaToggle = () => {
    var mediaToggle = document.querySelector('.social-media');
    mediaToggle.classList.toggle('social-media-acitve');
  }
  mediaToggleMobile = () => {
    var mediaToggleMobile = document.querySelector('.mobile-social-container');
    mediaToggleMobile.classList.toggle('mobile-social-container-active');
  }

  render(){
    return(
      <div className="cards">
        <div className="image-container">
        <img src={drawer} alt=""/>
        </div>
        <div className="body-container">
        < h3>{this.props.header}</h3>
          <p>{this.props.body}</p>
        <div className="user-container">
          <img src={avatar} alt=""/>
          <ul>
            <li>
            {this.props.userName}
            </li>
            <li>
              {this.props.date}
            </li>
          </ul>
        </div>
        <div className="social-container"  onClick={this.mediaToggle}>
          <img className="sharebtn" src={share} alt="" />
          <div className="social-media">
            <p>Share</p>
            <img src={facebook} alt="facebook link"/>
            <img src={twitter} alt="twitter link"/>
            <img src={pinterest} alt="pinterest link"/>
          </div>
        </div>
        <div className="mobile-social-box">
        <div className="mobile-social-container">
        <img className="mobilesharebtn" src={share} alt="" onClick={this.mediaToggleMobile} />
          <div className="mobile-social-media">
            <ul>
              <li><p>Share</p></li>
              <li><img src={facebook} alt="facebook link"/></li>
              <li><img src={twitter} alt="twitter link"/></li>
              <li><img src={pinterest} alt="pinterest link"/></li>
              <li onClick={this.mediaToggleMobile} ><img className=" " src={share} alt="" /></li>
            </ul>
          </div>
        </div>


        </div>

        </div>
      </div>
    );
  }
}


export default Card;

