import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import { Routes, Route} from 'react-router-dom';
import Yeni from './pages/yeni';
import Apple from './pages/apple';
import Samsung from './pages/samsung';
import Xiaomi from './pages/xiaomi';
import Redmi from './pages/redmi';
import Aksessuarlar from './pages/aksessuarlar';
import Notfoundpage from './pages/notfoundpage';
import SingleProduct from './pages/SingleProduct';


import Styles  from "./assets/styles/Breadcrumbs.module.css"
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";

import Cart from "./pages/Cart/Cart"

import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";


const routes = [
  { path: "/yeni/:id", breadcrumb: " < Product" },
  { path: "/apple", breadcrumb: "Apple" },
  { path: "/samsung", breadcrumb: "Samsung" },
  { path: "/login", breadcrumb: "Daxil ol"},
  { path: "/", breadcrumb: ""},
  { path: "/sebet", breadcrumb: "Səbət"},
  { path: "/signup", breadcrumb: "Qeydiyyat"}
];

const Breadcrumbs = () => {
  
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <>
    <div className={Styles.breadcrumbs}>
        {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </div>
    
    </>
  );
};




function App() {
 
  return (
    <div className='wrapper'>
     <Header className="header"/>
     <Breadcrumbs/>
     

     
     <Routes>
        <Route path='/' element={<Content className="content"/>}/>
        <Route path='yeni' element={<Yeni/>}/>
        <Route path='yeni/:id' element={<SingleProduct/>}/>
        <Route path='apple' element={<Apple/>}/>
        <Route path='samsung' element={<Samsung/>}/>
        <Route path='xiaomi' element={<Xiaomi/>}/>
        <Route path='redmi' element={<Redmi/>}/>
        <Route path='aksessuarlar' element={<Aksessuarlar/>}/>
        <Route path='sebet' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Notfoundpage/>}/>
     </Routes>
        

     <Footer/>
    </div>
  )
}

export default App;
