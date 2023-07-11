import React from 'react';
import PagesStyle from '../assets/styles/pages.module.css';
import Content from '../assets/styles/content.module.css'
import { commerce } from '../commerce';

import ProductOne from './ProductOne';

import Categories from './Categories/categories';

import reactLogo from '../assets/icons/react.svg';

import  Pagination  from '../components/Pagination/Pagination';

const Yeni = () => {
    

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [productsPerPage] = React.useState(27);

    async function getProducts(){
      setLoading(true);
      const datas = await commerce.products.list({
      limit: 27,
      
      category_slug: ['yeni'],
      });
      
      setData(datas.data);
      setLoading(false);
      return datas;
      }
      

    React.useEffect(() => {
            getProducts();
        }, [])

        console.log(data);

        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProduct = data.slice(indexOfFirstProduct, indexOfLastProduct);
      



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

       <div data={currentProduct} className={`${Content.products_list} ${PagesStyle.main}`}>
      
      {data.map((product) => (
        <ProductOne key={product.id}  {...product}
  
        />
      )
      )} 
       
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={data?.length}
        setCurrentPage={setCurrentPage}
      />
    
      
      </div> 
        
     
      </>

     
            )
}

export default Yeni;

