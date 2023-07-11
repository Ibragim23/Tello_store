import { useState } from 'react'
import '../assets/styles/navbar.css'

import { Link } from 'react-router-dom';

const Navbar = () => {

 const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
 const [menu_class, setMenuClass] = useState('menu hidden');
 const [isMenuClicked, setIsMenuClicked] = useState(false); 

 const updateMenu = () => {
  if (isMenuClicked) {
    setBurgerClass('burger-bar clicked');
    setMenuClass('menu visible')
  }
  else {
    setBurgerClass('burger-bar unclicked');
    setMenuClass('menu hidden');
  }
  setIsMenuClicked(!isMenuClicked)
 }
  return (
    <div style={{width: '100%', height: '100'}}>
        <nav>
            <div className='burger_menu' onClick={updateMenu}>
                <div className={burger_class}> </div>
                <div className={burger_class}> </div>
                <div className={burger_class}> </div>
            </div>
        </nav>

        <div className={menu_class}>
          <ul>
        <li><Link to='/Yeni'>Yeni</Link></li>
        <li><Link to='/Apple'>Apple</Link></li>
        <li><Link to='/Samsung'>Samsung</Link></li>
        <li><Link to='/Xiaomi'>Xiaomi</Link></li>
        <li><Link to='/Redmi'>Redmi</Link></li>
        <li><Link to='/Yeni'>Butun brendler</Link></li>
        <li><Link to='/Aksessuarlar'>Aksessuarlar</Link></li>
        <li><Link to='/Aksessuarlar'>Endirimler</Link></li>
          </ul>
        </div>
        <hr/>
     
    </div>
   
  )
}

export default Navbar