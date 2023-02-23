import React,{ useState } from "react";
import "./Registerform.css"
import axios from "axios";
const Registerform = () =>{
//   axios.post('/profiles', {
//     id: this.props.match.params.id,
//     // додаткові поля профілю
//   })
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
  const[inputlogin,setInputlogin] = useState('');
  const[inputPassword,setInputPassword] = useState('')
  const[inputaceptPassword,setaceptPassword] = useState('')
  const[inputEmail,setInputEmai] = useState('')

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
    if(inputlogin===''){
      alert("Ведіть логін");
    }else if(inputPassword==='' ){
      alert("Ведіть пароль");
    }else if(inputEmail===""){
      alert("Ведіть пошту");
    }else{
      axios.post('http://localhost:8000/register/', {
        login: inputlogin,
        passworld: inputPassword,
        email: inputEmail
      })
      .then(function (response) {
        console.log(response);
        if(response.data.has_user!==true){
          setInputlogin('')
          setInputPassword('')
          setInputEmai('')
          setaceptPassword('')
        }else{
          alert("На дану пошту вже зареэстрований акаунт")
        }
      })
      .catch(function (error) {
        console.log(error);
      });


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