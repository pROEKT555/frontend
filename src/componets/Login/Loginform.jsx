import React,{ useState } from "react";
import "./Loginform.css"
import axios from "axios";
import { Link } from "react-router-dom";
const Loginform = (props) =>{
  const[inputlogin,setInputlogin] = useState('');
  const[inputPassword,setInputPassword] = useState('')
  const postsend =(login,passworld)=>{
    axios.post('http://localhost:8000/login/', {
      login: login,
      passworld: passworld,
      email:"ccc@gma.com"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const LoginChangeHendler = (event) =>{
    setInputlogin(event.target.value)

  }
  const PasswordChangeHendler = (event) =>{
    setInputPassword(event.target.value)

  }

  const submitHandler = (event) =>{
    event.preventDefault();
    props.setisLoggedIn(true);
    postsend(inputlogin,inputPassword)
    // props.history.push('/');
  }
  return(

    <div className="form-registere">
    
      <form className="form-registere__form" onSubmit={submitHandler}>
        <h1 className="form-registere-title">Увійти в обліковий запис</h1>
        <div className="registere-form__control registere-form__control-1">
          {/* <label>Ведіть логін</label> */}
          <input placeholder="Ведіть логін або пошту" className="registere-form__input" value={inputlogin} onChange={LoginChangeHendler} type="text" ></input>
        </div>
        <div className="registere-form__control">
          {/* <label>Ведіть пароль</label> */}
          <input placeholder="Ведіть пароль" className="registere-form__input" value={inputPassword} onChange={PasswordChangeHendler} type="password"></input> 
        </div>        
        <div className="registere-form__actions">
          <button className="registere-form__actions__button" type="submit">Увійти</button>
        </div>
        <div className="a-register-form">
          <Link to="/register" className="a-register-form__a">Створити обліковий запис</Link>
        </div>
      </form>
    </div>
  )
}

export default Loginform;