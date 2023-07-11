import  Styles from "./Search.module.css";

import { FaSearch } from "react-icons/fa";

import React, {useState} from "react";

import { commerce } from "../../commerce";

import ProductOne from "../../pages/ProductOne";

 const Search = () => {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(true)
  const [searchFilter, setSearch] = useState('')

  


    async function getProducts(){
      const datas = await commerce.products.list({
        limit: 100,
      });
      
      setData(datas.data);
      setLoading(false)
      return datas;
      }
      

    React.useEffect(() => {
            getProducts();


        }, [])

  
const filteredProducts = data?.filter(product => product?.name.toString().toLowerCase().includes(searchFilter));

  return (
   <div>
  <div className={Styles.inputWrapper}>
  
  <FaSearch className={Styles.searchBtn}/>
  
      <div className={Styles.content}>
        <input type="text"
          className={Styles.input}
          placeholder="   Axtarış..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          <div></div>
        ) : (
          <ul className={Styles.list_group}>
            {filteredProducts.map((product, id ) => (
              <li className={Styles.list_group_item} key={id}>

                <ProductOne  key={product.id}  {...product}/>

              </li>
            ))}
          </ul>
        )}
      </div>
     
    </div>



    
  </div>
  );
};

export default Search;