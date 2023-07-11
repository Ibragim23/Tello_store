import { Link } from 'react-router-dom';
import Content from '../assets/styles/content.module.css';


const ProductOne = ( { image, price, name, id }) => {

  return (
                <Link to={`/yeni/${id}`} className={Content.cards}>
                <div className={Content.card__top}> 
                    <img src={image.url}  className={Content.card__image}/>
                </div>
                <div className={Content.card__bottom}>
                <a href="#" className={Content.card__title}>{name}</a>
                <div className={Content.card__prices}>
                <div className={Content.card__price_one}></div>
                <div className={Content.card__price_product}>{price.formatted_with_symbol}</div>
                
                </div>
                </div>

                </Link>
  )
}



export default ProductOne

