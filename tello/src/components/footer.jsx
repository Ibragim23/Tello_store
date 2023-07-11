import Footer from "../assets/styles/footer.module.css";
import Tello from "../assets/footer_icons&images/tello.svg";
import Inst from "../assets/footer_icons&images/inst.svg";
import Facebook from "../assets/footer_icons&images/facebook.svg";
import Twitter from "../assets/footer_icons&images/twitter.svg";
import Youtube from "../assets/footer_icons&images/youtube.svg";
import Adress from "../assets/footer_icons&images/4200473_address_location_map_navigation_icon.svg";
import Message from "../assets/footer_icons&images/message.svg";
import Phone from "../assets/footer_icons&images/9110984_call_phone_icon (1).svg";
import Law from "../assets/footer_icons&images/LawIcon.svg";

function FooterMain() {
  return (
    <div className={Footer.main}>
      <div className={Footer.main_container}>

        <div className={Footer.tello}> 
            <img src={Tello}/>
        </div>
            
         <div className={Footer.media}>
            <img src={Inst}/>
            <img src={Facebook}/>
            <img src={Youtube}/>
            <img src={Twitter}/>
         </div>

         <div className={Footer.menu}>
            <h6>Menu</h6>
            <a href="#">Yeni</a>
            <a href="#">Endirimlər</a>
            <a href="#">Aksessuarlar</a>
            <a href="#">Bütün brendlər</a>
         </div>

         <div className={Footer.help}>
            <h6>Kömək</h6>
            <a href="#">Tez-tez soruşulan suallar</a>
            <a href="#">Çatdırılma xidməti</a>
            <a href="#">Geri qaytarılma şərtləri</a>
         </div>

         <div className={Footer.contact}>
            <h6>Əlaqə</h6>
            <a href="#"><img src={Adress}/>M. K. Ataturk avenue 89, Baku, Azerbaijan</a>
            <a href="#"><img src={Message}/>example@gmail.com</a>
            <a href="#"><img src={Phone}/>*2108</a>
         </div>

         <div className={Footer.conditions}>
               <div>Qaydalar və şərtlər</div>
               <div>Məxfilik siyasəti</div>
         </div>

         <div className={Footer.law}><img src={Law}/>PeojectX 2021. Bütün hüquqlar qorunur.</div>
      </div>
    </div>
  )
}

export default FooterMain;