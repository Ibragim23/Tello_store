import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo from './image 1 slide.png';
import Style from "./carousel.module.css"



const SimpleCarousel = () => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      useCSS: true
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src={Photo} alt='slide-1' className={Style.picture} />
        </div>
        <div>
          <img src={Photo} alt='slide-2' className={Style.picture} />
        </div>
        <div>
          <img src={Photo} alt='slide-3' className={Style.picture}/>
        </div>
      </Slider>
    );
  };
  
export default SimpleCarousel