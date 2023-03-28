/* eslint-disable eqeqeq */
import { useState } from "react";
import img from "./304947.svg"
import axios from "axios";
import "./Testadd.css";
import { useNavigate } from "react-router-dom";
import Testvisit from "../Testaddvisit/Testvisit";
const Testadd = (props) =>{
  const navigate = useNavigate();
  const[isNametest,setisNametest] = useState("");
  const[isIdtest,setisIdtest] = useState("");
  const[isinputradio,setisinputradio] = useState("");
  const[isinputquest,setisinputquest] = useState("");
  const[isinputquest1,setisinputquest1] = useState("");
  const[isinputquest2,setisinputquest2] = useState("");
  const[isinputquest3,setisinputquest3] = useState("");
  const[isinputquest4,setisinputquest4] = useState("");
  const[isrowquest,setrowquest]= useState([]);
  const[isquest,setisquest] = useState(false);
  const ContentinputquestChange =(event)=>{
    console.log(event.target.value)
    setisinputquest(event.target.value)
  }
  const ContentradioChange =(event)=>{
    setisinputradio(event.target.value)
    console.log(event.target.value)
  }
  const Contentinputquest1Change =(event)=>{
    setisinputquest1(event.target.value)
    console.log(event.target.value)
  }
  const Contentinputquest2Change =(event)=>{
    setisinputquest2(event.target.value)
    console.log(event.target.value)
  }
  const Contentinputquest3Change =(event)=>{
    setisinputquest3(event.target.value)
    console.log(event.target.value)
  }
  const Contentinputquest4Change =(event)=>{
    setisinputquest4(event.target.value)
    console.log(event.target.value)
  }
  const Sendcontent =(authid,nametest)=>{
      console.log([
        {
          "author": authid,
          "name": nametest
        },
        ...isrowquest.map(x=>x)
      ])
      axios.post('http://127.0.0.1:8000/test/', [
        {
          "author": authid,
          "name": nametest,
        },
        ...isrowquest.map(x=>x)

      ])
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
    setisIdtest(10)
    
  }
  const submitHandler1 = (event) =>{
    event.preventDefault();
    setrowquest([...isrowquest,
      {
        "text": isinputquest,
        "quzitrue":isinputradio,
        "answ": [
            {
              "text": isinputquest1,
            },
            {
              "text": isinputquest2,
            },
            {
              "text": isinputquest3,
            },
            {
              "text": isinputquest4,
            }
            
        ]
     }
    ]);
    setisquest(false);
    console.log(isrowquest[0].quzitrue)
  }
  const AddTestcontent=()=>{
    console.log(isNametest)
    Sendcontent(props.isIdacaynt,isNametest)
    navigate("/")
  }
    
  if(isquest===true){
    return(
      <div className="question">
       <h1>Додати запитання</h1>
        <div className="row">
        <form onSubmit={submitHandler1} className='form-row'>
              <div className="row-block">
                <input className="block-title" type='text' onChange={ContentinputquestChange} placeholder="Питання"></input>
              </div>
              <div className="row-block">
                <input className="test-radio" value="1" onChange={ContentradioChange} type='radio'name="test" />
                <input className="block-title" placeholder="Відповідь 1" onChange={Contentinputquest1Change} type='text'></input>
              </div>
              <div className="row-block">
                <input className="test-radio" value="2"  onChange={ContentradioChange} type='radio'name="test" />
                <input className="block-title" placeholder="Відповідь 2" onChange={Contentinputquest2Change} type='text'></input>
              </div>
              <div className="row-block">
                <input className="test-radio" value="3"  onChange={ContentradioChange} type='radio'name="test" />
                <input className="block-title" placeholder="Відповідь 3" onChange={Contentinputquest3Change} type='text'></input>
              </div>
              <div className="row-block">
                <input className="test-radio" value="4"  onChange={ContentradioChange} type='radio'name="test" />
                <input className="block-title" placeholder="Відповідь 4" onChange={Contentinputquest4Change} type='text'></input>
              </div>
              <div className="row-block">
                <button className="block__submit" type="submit">Додати</button>
              </div>
            </form>
            </div>
        
      </div>
     
    )
  }else if(isIdtest!==""){
    return(
      <div className="form-registere">
      
        <form className="form-registere__form" onSubmit={submitHandler} >
          <h1 className="form-registere-title">Дотати питання</h1>
          {isrowquest.map((item, index) => (
            <Testvisit key={index} test1={item.answ[0].text} test2={item.answ[1].text} test3={item.answ[2].text} test4={item.answ[3].text} title={item.text} quzitrue={Number(item.quzitrue)}/>
          ))}
          {/* <Testvisit test1={"dsasadasd"} test2={"Sadsdas"} test3={"asdasd"} test4={"isinputquest4"}  title={4} quzitrue={1}/> */}
          {/* <Testvisit test1={isinputquest1} test2={isinputquest2} test3={isinputquest3} test4={isinputquest4}  title={isinputquest}  quzitrue={isinputradio}/> */}
          <div className="block">
            <label className="block_label">
              <button className="block__a" onClick={Linktoaddquat}>
                <img src={img} alt="asd" className="block-a__img"></img>
              </button>
              <h2 className="block__title">Додати запитання</h2>   
            </label>
          </div>
          <div className="block-submit">
            <label className="block_label">
                <button className="block__submit"  onClick={AddTestcontent}>
                Додати тест
                </button>
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