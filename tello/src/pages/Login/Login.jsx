import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Styles from "./login.module.css";

import SignupImg from "../../assets/images/login/Group 5552.png"

import Facebook from "../../assets/images/login/Facebook.png";
import Google from "../../assets/images/login/Google.png";

const Login = () => {
  const navigation = useNavigate();
  const base_url = "http://localhost:3000";
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const obj = {
      email: email,
      password: pass,
    };

    console.log(email, pass);

    const resp = await fetch(`${base_url}/login-user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await resp.json();

    if (data.status === "ok") {
      localStorage.setItem("token", data.data);
      navigation("/");
    } else {
      alert(data.error);
    }
  };
  return (
    <>
    <div className={Styles.login_container}> 
   
     
      <div className={Styles.form_area}>
         <h3>Daxil ol</h3>
        <div className={Styles.media_area}>
        <div className={Styles.media}>
      <img src={Facebook} alt="Facebook" />
      <img src={Google} alt="Google" />
        </div>
        <p>və ya</p>
        </div>

        <form onSubmit={handleLogin}>
        <label>E-mail:
           <input
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
            />
        </label>
        <label>Şifrə:
            <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
             />
           <p><Link>Şifrəni unutmusunuz?</Link></p>  
        </label>
    
      <button>Daxil ol</button>
            </form>
      </div>
      <div className={Styles.register_area}>
         <img src={SignupImg} alt='Signup'/>
         <p>Hesabınız yoxdur?   <Link to="/signup">Qeydiyyatdan keçin</Link></p>
      </div>
    </div>
   

   
    </>
  );
};

export default Login;


