import Content from "../assets/styles/content.module.css";
import Phones from "../assets/images/image_phone.png";
import IconArrow from "../assets/icons/Icon-arrow.svg";
import Apple from "../assets/images/indialinIphone.png";
import Airtag from "../assets/images/indialinAirtag.png";
import IconJumbotron from "../assets/icons/Icon-arrow-jumbotron.svg";
import Telefon from "../assets/images/telefon.png";
import Watch from "../assets/images/smart-watch.png";
import Aksesuar from "../assets/images/aksesuar/Mask Group.png";
import Features from "../assets/images/features/features.png";
import FeaturesWeb from "../assets/images/features/features_web.png";
import Carousel from "./slider/carousel";
import CarouselBrands from "./slider-brands/brands_slider";

import React from "react";
import { commerce } from "../commerce";
import New_products from "./new_products";
import New_accessories from "./new_accessories";
import { Link } from "react-router-dom";



function MainContent() {
  const [data, setData] = React.useState([]);
  console.log(data);
  async function getProducts(){
    const datas = await commerce.products.list({
      limit: 4,
      page: 1,
    });
    
    setData(datas.data);

    return datas;
    }
  
      React.useEffect(() => {
          getProducts();
      }, [])
  
  


  return (
    <div className={Content.main}>
   

      <div className={Content.carousel}>
        <Carousel/>
    </div>
        <div className={Content.container}>
          <img src={Phones} alt="Phones" className={Content.imagePhones} />
          <h5 className={Content.buy_sell}>Buy & Sell What`s Now & Next</h5>
          <p className={Content.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus</p>      
        </div>

      <div className={Content.allproducts}>
      <div className={Content.best_selling}>
      <p>Ən çox satılan məhsullar</p>

            <div className={Content.card__list}>
            {data.map((product) => {
                console.log(product);
           return (<Link to={`/yeni/${product.id}`} className={Content.products_cards}
            key={product.id}
            >
                  <div className={Content.cards}>
                        <div className={Content.card__top}> 

                          <img src={product.image.url}  className={Content.card__image}/>
  
                        </div>
                        <div className={Content.card__bottom}>
                    <a href="#" className={Content.card__title}>{product.name}</a>
                      <div className={Content.card__prices}>
                        <div className={Content.card__price_one}></div>
                        <div className={Content.card__price_product}>{product.price.formatted_with_symbol}</div>
                        </div>
                        </div>
                  </div>
            </Link>
            
           )})}
            </div>

            <button className={Content.show_more}>Hamısına bax    <img src={IconArrow}/></button>
            
      </div>
      <div className={Content.new_products}>
        <p>Yeni gələn məhsullar</p>
        <div className={Content.card_new_product}>
        <New_products/>             
            </div>
            <button className={Content.show_more_np}>Hamısına bax    <img src={IconArrow}/></button>
            
      </div>

      <div className={Content.jumbotron}>
          <img src={Apple} alt="Apple" />
          <img src={Airtag} alt="Airtag" />
      </div>

      <div className={Content.new_accessories}> 
          <p>Yeni gələn aksesuarlar</p>
          <div className={Content.card_new_accessories}>
            <New_accessories/>
            </div>
            
            <button className={Content.show_more_na}>Hamısına bax    <img src={IconArrow}/></button>
            
      </div>

      <div className={Content.productsJumbotron}>
        <div className={Content.telefon}>
          <h3>Telefon</h3>
          <p>Məhsul sayı: 322</p>
          <a src="#">Məhsullara keçid <img src={IconJumbotron}/></a>
                <img src={Telefon} className={Content.mobile}/>
        </div>
    
        <div className={Content.smart_watch}>
        <h3>Smart Saat</h3>
          <p>Məhsul sayı: 46</p>
          <a src="#">Məhsullara keçid <img src={IconJumbotron}/></a>
                <img src={Watch} className={Content.watch}/>
        </div>

        <div className={Content.aksesuar}>
        <h3>Aksesuar</h3>
          <p>Məhsul sayı: 891</p>
          <a src="#">Məhsullara keçid <img src={IconJumbotron}/></a>
                <img src={Aksesuar} className={Content.aksesuar_group}/>
        </div> 

      </div>

      </div> 

      <div className={Content.features}>
        <img src={Features}  alt="features"/>
        <img src={FeaturesWeb} alt="features_web"/>
      </div>

      <div className={Content.carousel_brands}>
        <CarouselBrands/>
      </div>

    </div>
  )
}

export default MainContent;
