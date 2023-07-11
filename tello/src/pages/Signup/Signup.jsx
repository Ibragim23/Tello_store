import React from "react";
import { useNavigate } from "react-router-dom";

import Styles from "./signup.module.css";

import { Link } from "react-router-dom";

import SignupImg from "../../assets/images/login/Group 5552.png"

import Facebook from "../../assets/images/login/Facebook.png";
import Google from "../../assets/images/login/Google.png";

const Signup = () => {
  const navigation = useNavigate();
  const base_url = "http://localhost:3000";
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [userType, setUserType] = React.useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const obj = {
      fname: name,
      lname: surname,
      email: email,
      password: pass,
      userType: userType,
    };

    const resp = await fetch(`${base_url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    const data = await resp.json();

    if (data.status === "ok") {
      navigation("/login");
    } else {
      alert("error");
    }
  };

  return (
    <div className={Styles.login_container}>
      <div className={Styles.form_area}>
      <h3>Qeydiyyat</h3>
        <div className={Styles.media_area}>
        <div className={Styles.media}>
      <img src={Facebook} alt="Facebook" />
      <img src={Google} alt="Google" />
        </div>
        <p>və ya</p>
        </div>
        <form onSubmit={handleRegister}>
         
          <label>
          Ad
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </label>
          <label>
          Soyad
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          </label>
          <label>
            Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </label>
          <label>
          Şifrə
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          </label>
           <label className={Styles.label_conditions} htmlFor="">
             <input
            className={Styles.conditions}
            type="radio"
            name="UserType"
            value="User"
            onChange={(e) => setUserType(e.target.value)}
          />
            İstifadəçi şərtləri ilə razıyam</label>
         

          <button>Submit</button>
        </form>
    </div>
      <div className={Styles.register_area} >
      <img src={SignupImg} alt='Signup'/>
      <p>Artıq hesabınız var?    <Link to="/login">Daxil olun </Link></p>
      </div>

    </div>
    
  );
};

export default Signup;
