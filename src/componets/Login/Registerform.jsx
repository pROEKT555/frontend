import React,{ useState } from "react";
import "./Registerform.css"
import Menunav from "../Menu-nav/Menunav";
const Registerform = () =>{
  const[inputlogin,setInputlogin] = useState('');
  const[inputPassword,setInputPassword] = useState('')
  const[inputEmail,setInputEmai] = useState('')
  const LoginChangeHendler = (event) =>{
    setInputlogin(event.target.value)

  }
  const PasswordChangeHendler = (event) =>{
    setInputPassword(event.target.value)

  }
  const EmailChangeHendler = (event) =>{
    setInputEmai(event.target.value)

  }
  const submitHandler = (event) =>{
    event.preventDefault()
    const costDate = {
      login:inputlogin,
      password:inputPassword,
      email:inputEmail
    };
    console.log(costDate)
    setInputlogin('')
    setInputPassword('')
    setInputEmai('')
    };

  return(

    <div>
    <Menunav/>
    <form className="form-registere" onSubmit={submitHandler}>
      <div className="registere-form__control">
        <label>Ведіть логін</label>
        <input value={inputlogin} onChange={LoginChangeHendler} type="text" ></input>
      </div>
      <div className="registere-form__control">
        <label>Ведіть пароль</label>
        <input value={inputPassword} onChange={PasswordChangeHendler} type="password"></input> 
      </div>
      <div className="registere-form__control">
        <label>Ведіть пошту</label>
        <input value={inputEmail} onChange={EmailChangeHendler} type="email"></input>
      </div>
      
      <div className="registere-form__actions">
        <button type="submit">Створити акаунт</button>
      </div>
    </form>
    </div>
  )
}
export default Registerform;