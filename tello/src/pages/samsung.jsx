import React from 'react';
import PagesStyle from '../assets/styles/pages.module.css';
import Content from '../assets/styles/content.module.css';
import { commerce } from '../commerce';

import ProductOne from './ProductOne';

import Categories from './Categories/categories';

import reactLogo from '../assets/icons/react.svg';

const Samsung = () => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);


    
    async function getProducts(){
      setLoading(true);
      const datas = await commerce.products.list({
        limit: 27,
        page: 1,
        category_slug: ['samsung'],
      });
      
      setData(datas.data);
      setLoading(false);
      return datas;
      }
    
        React.useEffect(() => {
            getProducts();
        }, [])


        if(loading) {
          return (
            <div className={PagesStyle.animation}>
              <img src={reactLogo} className={PagesStyle.logo}  alt="React logo" />
            </div>
          )
        } 


    return (
      <>
      <Categories/>
      
      <div  className={`${Content.products_list} ${PagesStyle.main}`}>
      
      {data.map((product) => (
        <ProductOne key={product.id}  {...product}/>
      )
      )} 
      </div>
      </>
    )

}

export default Samsung ;