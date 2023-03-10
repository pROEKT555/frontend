import './Contentvisit.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Contentvisitscript from '../Contentvisitscript/Contentvisitscript';
import { useState } from 'react';

const Contentvisit =() =>{
  const[inputitem,setInputitem] = useState([]);
  const fetchData =  () => {
    axios.get('http://localhost:8000/content/')
  .then(response => {
    // console.log(response.data);
    setInputitem(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  };

  fetchData()
  return(
    <div className='Contentvisit'>
      <div className='conteiner'>
        <div className='content-add'>
          <Link to='/contentadd' className='content-add__Link'>Дотати контент</Link>
        </div>
        <div className='content-visit'>
        {inputitem.map((item, index) => (
          <Contentvisitscript key={index} name={item.author_name} title={item.name} description={item.descript} file={item.files} />
        ))}
        </div>
      </div>

    </div>
  )
}
export default Contentvisit;