import React from 'react'
import { commerce } from '../commerce';
import Content from '../assets/styles/content.module.css';

import { Link } from 'react-router-dom';

function New_accessories() { 
        
    const [data, setData] = React.useState([]);
    console.log(data);
    async function getProducts(){
      const datas = await commerce.products.list({
        limit: 4,
        page: 1,
        category_slug: ['accessories'],
      });
      
      setData(datas.data);
  
      
          
    


      return datas;
      }
    
        React.useEffect(() => {
            getProducts();
        }, [])
    
  return (
    <>
    <div className={Content.products_list}>
 {data.map((product) => {
                console.log(product);
           return (
          
           <Link to={`/yeni/${product.id}`} className={Content.products_cards}
            key={product.id}>

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
           
           )
           }  
           )
           } 

    </div>
     
    </>
  )
}

export default New_accessories;