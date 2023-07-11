import React from 'react';

import Header from '../assets/styles/header.module.css'
import Logo from '../assets/icons/Artboard 1.svg';
import TelloLogo from '../assets/icons/Tello.svg'
import Person from '../assets/icons/Person.svg';
import Heart from '../assets/icons/Heart.svg';
import Path from '../assets/icons/Path.svg';
import PathCounter from '../assets/icons/Ellipse 2.svg';

import Navbar from '../components/navbar'

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Search from './Search/Search';






function HeaderMain() {

    const [data, setData] = React.useState();
    const base_url = "http://localhost:3000";
  


    const getUserData = async () => {
      const resp = await fetch(`${base_url}/userData`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: localStorage.getItem("token"),
        }),
      });
  
      const data = await resp.json();
  
      setData(data.data);
    };
  
    React.useEffect(() => {
      getUserData();
    }, []);
  

  const { cartTotalQuantity } = useSelector(state  => state.cartItem);
  return (
<div className={Header.header}>
    <Navbar/>
    <Link to="/">
        <img src={Logo} alt="Logo" className={Header.logo} />
    </Link>
    <Link to="/">
        <img src={TelloLogo} alt="Logo" className={Header.tello} />
    </Link>
    <Link to="login">
    {data && (
        <>
          <div className={Header.fname}>{data.fname}</div>
        </>
      )}
        <img src={Person} alt="Logo" className={Header.person} />
    </Link>
    <a href="#">
        <img src={Heart} alt="Logo" className={Header.heart} />
    </a>
    <Link to="sebet">
        <img src={Path} alt="Logo" className={Header.path} />
    </Link>
    <a className={Header.pathCounterBox} href="#">
    <img src={PathCounter} alt="Logo" className={Header.pathCounter}/> 
    <span className={Header.pathCounterDigit}>{cartTotalQuantity}</span>
    </a>

    <div className="box">
        <div className={Header.container}>
        
         <Search/> 
          
        </div>
  </div>

</div> 

  )
}


export default HeaderMain;