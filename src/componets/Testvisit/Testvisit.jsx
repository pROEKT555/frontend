import { Link } from "react-router-dom";
import axios from "axios";
import "./Testvisit.css"
import { useState } from 'react';
import Testvisitscript from "../Testvisitscript/Testvisitscript";
const Testvisit =( ) =>{
  const[inputitem,setInputitem] = useState([]);
  const fetchData =  () => {
    axios.get('http://localhost:8000/test/')
    .then(response => {
      
      setInputitem(response.data.test_output);
    })
    .catch(error => {
      console.log(error);
    });
  };
  fetchData()
  return(
    <div className="Testvisit">
      <div className="conteiner">
        <div className="button-add">
          <Link to="/test/add"  className="buttonadd">Додати тест</Link>
        </div>
        <div className="Testvisit-row">
          {inputitem.map((item, index) => (
            <Testvisitscript key={index} title={item.name} subtitle={item.author_name} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Testvisit;