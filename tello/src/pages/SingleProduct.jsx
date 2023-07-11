/* eslint-disable react-refresh/only-export-components */
import { useParams } from "react-router-dom"
import { commerce } from "../commerce";
import React from "react";

import Styles from "../assets/styles/pages.module.css";

import StarRating from "./rating/StarRating";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Back from "../assets/icons/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg";
import  Next from "../assets/icons/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg";

import Basket from "../assets/images/commerce.js/cart.svg";

import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartReducer";



function log(value) {
  console.log(value);
}


const SingleProduct = () => {

  

  const { id } = useParams();
  const [data, setData] = React.useState([]);
  
  

  const dispatch = useDispatch();
  

  async function getProducts() {
    const datas = await commerce.products.retrieve(id).then(product => product);
    
    console.log(datas);
    setData(datas);

    
    }

  React.useEffect(() => {
          getProducts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id])

const addToCartProduct = (data) => {
  dispatch(addToCart(data));
}




  return (
    <div className={Styles.main}>
      <div>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={220}
        totalSlides={3}
      >
        <Slider >
        <Slide>
          <img className={Styles.sliderImg} src={data?.assets?.[0].url}/>
        </Slide>
        <Slide>
          <img className={Styles.sliderImg} src={data?.assets?.[0].url}/>
        </Slide>
         <Slide>
          <img className={Styles.sliderImg} src={data?.assets?.[0].url}/>
         </Slide>
        </Slider>
        <ButtonBack><img src={Back}/></ButtonBack>
        <ButtonNext><img src={Next}/></ButtonNext>
      </CarouselProvider>   
      </div>
      <div className={Styles.description}>
    
      <div className={Styles.name}>{data?.name}</div>
      <StarRating onChange={log} />
      <div className={Styles.price}>{data?.price?.formatted_with_symbol}</div>  
      
      
      <div className={Styles.basketButtons}>
        <div className={Styles.count}> 
              <div className={Styles.count__contorls}>
                <button type='button' className={Styles.count__up}>
                 <AiOutlinePlusCircle size='2rem'/>    
                </button>
                  <div className={Styles.count__box}>
                <input type='number' className={Styles.count__unput} min='1' max='100' />
                  </div>
                <button type='button' className={Styles.count__down}>
                  <AiOutlineMinusCircle size='2rem'/>
                </button>
              </div>
        </div>
       
        
          <button 
           onClick={() => addToCartProduct(data)}
           className={Styles.basket} >
            <img src={Basket}/>Səbətə at</button>
        
        </div>
     
      </div>
    </div>
  )
} 



export default SingleProduct;