import  { Component } from "react";
import Slider from "react-slick";
import Toshiba from "./toshiba.png";
import Philips from "./philips.png";
import HP from "./hp.png";
import Electrolux from "./electrolux.png";
import Gorenje from "./gorenje.png";
import Bosch from "./bosch.png";
import A from "./A.png";
import './brands_slider.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1.5,
      arrows: false
    };
    return (
      <div className="content_slider">
        <Slider {...settings}>
          <div>
            <img src={Toshiba}/>  
          </div>
          <div>
            <img src={Philips}/>
          </div>
          <div>
          <img src={HP}/>
          </div>
          <div>
          <img src={Electrolux}/>
          </div>
          <div>
          <img src={Gorenje}/>
          </div>
          <div>
          <img src={Bosch}/>
          </div>
          <div>
            <img src={A}/>
          </div>
        </Slider>
      </div>
    );
  }
}