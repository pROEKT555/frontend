import React,{ useState } from "react";
import "./Registerform.css"
import axios from "axios";
const Registerform = () =>{
  const[inputlogin,setInputlogin] = useState('');
  const[inputPassword,setInputPassword] = useState('')
  const[inputaceptPassword,setaceptPassword] = useState('')
  const[inputEmail,setInputEmai] = useState('')

  const postsend =(login,passworld,email)=>{
    axios.post('http://localhost:8000/register/', {
      login: login,
      passworld: passworld,
      email: email
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
  const PasswordaceptChangeHendler = (event) =>{
    setaceptPassword(event.target.value)

  }
  const EmailChangeHendler = (event) =>{
    setInputEmai(event.target.value)

  }
  const submitHandler = (event) =>{
    event.preventDefault()
    if(inputlogin==='' && inputPassword==='' && inputEmail==="" && inputPassword!==inputaceptPassword){
      alert("Ведіть дані");
    }else{
      postsend(inputlogin,inputPassword,inputEmail)
      setInputlogin('')
      setInputPassword('')
      setInputEmai('')
    }

    };

  return(

    <div className="form-registere">
    
      <form className="form-registere__form" onSubmit={submitHandler}>
        <h1 className="form-registere-title">Створити обліковий запис</h1>
        <div className="registere-form__control registere-form__control-1">
          {/* <label>Ведіть логін</label> */}
          <input placeholder="Ведіть логін" className="registere-form__input" value={inputlogin} onChange={LoginChangeHendler} type="text" ></input>
        </div>
        <div className="registere-form__control">
          {/* <label>Ведіть пошту</label> */}
          <input placeholder="Ведіть пошту" className="registere-form__input" value={inputEmail} onChange={EmailChangeHendler} type="email"></input>
        </div>
        <div className="registere-form__control">
          {/* <label>Ведіть пароль</label> */}
          <input placeholder="Ведіть пароль" className="registere-form__input" value={inputPassword} onChange={PasswordChangeHendler} type="password"></input> 
        </div>
        <div className="registere-form__control">
          {/* <label>Ведіть пароль</label> */}
          <input placeholder="Підтвердіть пароль" className="registere-form__input" value={inputaceptPassword} onChange={PasswordaceptChangeHendler} type="password"></input> 
        </div>

        
        <div className="registere-form__actions">
          <button className="registere-form__actions__button" type="submit">Створити акаунт</button>
        </div>
      </form>
    </div>
  )
}
export default Registerform;