import "./Contentadd.css"
import axios from "axios";
import { useState } from "react";
const Contentadd = (props) =>{

  console.log(props.isIdacaynt)
  const[inputContenname,setInputContenname] = useState("");
  const[inputContedescription,setInputContedescription] = useState("")
  const[inputContefile,setInputContefile] = useState("")
  const Sendcontent =(authid,author_name,name,description,file)=>{
    if(authid ==='undefined' ){
      alert('Ви не авторізувалися')
    }else if( name ===''){
      alert('Ви невели назву контенту')
    }else if(description ==='' ){
      alert("Ви невели опис контенту")
    }else if(file ===''){
      alert('Ви неприкріпили файл')
    }else{
      console.log(author_name);
      axios.post('http://127.0.0.1:8000/content/', {
        author:authid,
        author_name:author_name,
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
    Sendcontent(props.isIdacaynt,"zxc",inputContenname,inputContedescription,inputContefile)
    setInputContefile('');
    setInputContedescription('');
    setInputContenname('');
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
          <input placeholder="Ведіть опис контенту" value={inputContedescription} onChange={ContentdescriptionChange} className="registere-form__input" type="text"></input> 
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