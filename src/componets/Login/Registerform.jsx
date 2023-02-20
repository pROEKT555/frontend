import React,{ useState } from "react";
import "./Registerform.css"
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
    if(inputlogin==='' || inputPassword==='' || inputEmail===""){
      
      alert("Ведіть дані");
      
    }else{
      const costDate = {
        login:inputlogin,
        password:inputPassword,
        email:inputEmail
      };
      console.log(costDate)
      setInputlogin('')
      setInputPassword('')
      setInputEmai('')
    }

    };

  return(

    <div className="form-registere">
    
      <form className="form-registere__form" onSubmit={submitHandler}>
        <div className="registere-form__control">
          <label>Ведіть логін</label>
          <input className="registere-form__input" value={inputlogin} onChange={LoginChangeHendler} type="text" ></input>
        </div>
        <div className="registere-form__control">
          <label>Ведіть пароль</label>
          <input className="registere-form__input" value={inputPassword} onChange={PasswordChangeHendler} type="password"></input> 
        </div>
        <div className="registere-form__control">
          <label>Ведіть пошту</label>
          <input className="registere-form__input" value={inputEmail} onChange={EmailChangeHendler} type="email"></input>
        </div>
        
        <div className="registere-form__actions">
          <button className="registere-form__actions__button" type="submit">Створити акаунт</button>
        </div>
      </form>
    </div>
  )
}
export default Registerform;