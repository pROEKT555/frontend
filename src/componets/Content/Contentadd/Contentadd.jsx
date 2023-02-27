import "./Contentadd.css"
import axios from "axios";
import { useState } from "react";
const Contentadd = () =>{
  const[inputContenname,setInputContenname] = useState('');
  const[inputContedescription,setInputContedescription] = useState('')
  const[inputContefile,setInputContefile] = useState('')
  const Sendcontent =(authid,name,description,file)=>{
    
    axios.post('http://127.0.0.1:8000/content', {
      author:authid,
      name: name,
      descript: description,
      files:file
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const ContentnameChange =(event)=>{
    setInputContenname(event.target.value);
  }
  const ContentdescriptionChange =(event)=>{
    setInputContedescription(event.target.value);
  }
  const ContentfileChange =(event)=>{
    setInputContefile(event.target.value);
  }
  const submitHandler = (event) =>{
    console.log(inputContenname,inputContedescription,inputContefile)
    event.preventDefault();
    Sendcontent(1,inputContenname,inputContedescription,inputContefile)
  }
  return (
    <div className="form-registere">
    
      <form className="form-registere__form" onSubmit={submitHandler} >
        <h1 className="form-registere-title">Дотати Контент</h1>
        <div className="registere-form__control registere-form__control-1">
          {/* <label>Ведіть логін</label> */}
          <input placeholder="Ведіть назву контенту" value={inputContenname}   onChange={ContentnameChange} className="registere-form__input"  type="text" ></input>
        </div>
        <div className="registere-form__control">
          {/* <label>Ведіть пароль</label> */}
          <input placeholder="Ведіть опис контенту" value={inputContedescription} onChange={ContentdescriptionChange} className="registere-form__input" type="password"></input> 
        </div>        
        <div className="registere-form__control">
          {/* <label>Ведіть пароль</label> */}
          <input placeholder="Прикрипіть файл" value={inputContefile} onChange={ContentfileChange} className="registere-form__input" type="text"></input> 
        </div>  
        <div className="registere-form__actions">
          <button className="registere-form__actions__button" type="submit">Дотати</button>
        </div>
      </form>
    </div>
  )
}

export default Contentadd;