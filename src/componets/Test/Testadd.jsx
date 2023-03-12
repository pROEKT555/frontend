import { useState } from "react";
import img from "./304947.svg"
import axios from "axios";
import "./Testadd.css"
const Testadd = (props) =>{
  const[isNametest,setisNametest] = useState("");
  const[isIdtest,setisIdtest] = useState("");
  const[isquest,setisquest] = useState(false);
  let rowquest =[]
  const Sendcontent =(authid,nametest)=>{
      axios.post('http://127.0.0.1:8000/test/', {
        author:authid,
        name:nametest,
      })
      .then(function (response) {
        setisIdtest(response.data.id)
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }
  const Linktoaddquat = () =>{
    setisquest(true)
  }
  const TestnameChange =(event)=>{
    setisNametest(event.target.value);
  }
  const submitHandler = (event) =>{
    event.preventDefault();
    Sendcontent(props.isIdacaynt,isNametest)
    setisNametest('')
  }
  if(isquest===true){
    return(
      <div className="question">
       <h1>Додати запитання</h1>
        <div className="row">
        <div className="row-block">
            <input type='text'></input>
          </div>
          <div className="row-block">
            <input className="test-radio" type='radio'name="test" />
            <input placeholder="Питання 1" type='text'></input>
          </div>
          <div className="row-block">
            <input className="test-radio" type='radio'name="test" />
            <input placeholder="Питання 2" type='text'></input>
          </div>
          <div className="row-block">
            <input className="test-radio" type='radio'name="test" />
            <input placeholder="Питання 3" type='text'></input>
          </div>
          <div className="row-block">
            <input className="test-radio" type='radio'name="test" />
            <input placeholder="Питання 4" type='text'></input>
          </div>
        </div>
      </div>
     
    )
  }else if(isIdtest!==""){
    return(
      <div className="form-registere">
      
        <form className="form-registere__form" onSubmit={submitHandler} >
          <h1 className="form-registere-title">Дотати питання</h1>
          <div className="block">
            <label className="block_label">
              <button className="block__a" onClick={Linktoaddquat}>
                <img src={img} alt="asd" className="block-a__img"></img>
              </button>
              <h2 className="block__title">Додати запитання</h2>   
            </label>
          </div>
        </form>
      </div>
    )
  }else if(props.isIdacaynt!=="undefined"){
    console.log(props.isIdacaynt)
    return (
      <div className="form-registere">
      
        <form className="form-registere__form" onSubmit={submitHandler} >
          <h1 className="form-registere-title">Дотати Тест</h1>
          <div className="registere-form__control registere-form__control-1">
            {/* <label>Ведіть тесту</label> */}
            <input placeholder="Ведіть назву тестa" value={isNametest} onChange={TestnameChange} className="registere-form__input"  type="text" ></input>
          </div>     
          <div className="registere-form__actions">
            <button className="registere-form__actions__button" type="submit">Дотати</button>
          </div>
        </form>
      </div>
    )
  }

}
export default Testadd;