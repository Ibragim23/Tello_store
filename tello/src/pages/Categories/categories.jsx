import "./categories.css";


import SiralamaSVG from "../../assets/images/commerce.js/swap.svg";
import FilterSVG from "../../assets/images/commerce.js/filter.svg" 

const Categories = () => {
 
   
   
    return (
    <div className="categories">
    <div className="dropdown">
      <div className="buttons">
          <span className="dropbtn"><img src={FilterSVG}/>Filterləmələr</span>
          <span className="siralama"><img src={SiralamaSVG}/>Sıralama</span> 
      </div>
      
      <div className="dropdown-content">
                  <details>      
                    <summary id="brend">Brend</summary>
                    <form className="checkbox">
                      <input  type="checkbox" id="click6" value="apple"></input>
                      <label htmlFor="click6" className="text"> Apple </label>
                    </form>
                    <form className="checkbox">
                      <input type="checkbox" id="click5" value="Samsung"></input>
                      <label htmlFor="click5" className="text"> Samsung </label>
                    </form>
                    <form className="checkbox">
                      <input type="checkbox" id="click4" value="Xiaomi"></input>
                      <label htmlFor="click4" className="text"> Xiaomi </label>
                    </form>
                    <form className="checkbox">
                      <input type="checkbox" id="click3" value="Honor"></input>
                      <label htmlFor="click3" className="text"> Honor </label>
                    </form>
                </details>
                <details>
                    <summary id="type">Type</summary>
                    <form className="checkbox">
                      <input onClick="" type="checkbox" id="click1" value="Telefon"></input>
                      <label htmlFor="click1" className="text"> Telefon </label>
                    </form>
                    <form className="checkbox">
                      <input type="checkbox" id="click2" value="Aksessuar"></input>
                      <label htmlFor="click2" className="text"> Aksessuar</label>
                    </form>
                </details>
                <details>
                    <summary id="categ">Category</summary>
                    <p>n</p>
                </details>
                <details>
                    <summary id="reng">Rəng</summary>
                    <p>С</p>
                </details>
                <details>
                    <summary id="qiymet">Qiymət</summary>
                    <p>С</p>
                </details>
      </div>

    </div>
   
       
 
    </div>
  )
}

export default Categories