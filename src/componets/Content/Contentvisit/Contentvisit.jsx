import './Contentvisit.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Contentvisitscript from '../Contentvisitscript/Contentvisitscript';
import { useState } from 'react';
//   let item= [
//     {
//         "author_id": 1,
//         "author_name": "zxc",
//         "name": "zxc?",
//         "descript": "Чому не варто звязуватися з zxc?",
//         "files": "Томушо zxc це СФ!"
//     },
//     {
//         "author_id": 1,
//         "author_name": "zxc",
//         "name": "zxc?",
//         "descript": "Чому не варто звязуватися з zxc?",
//         "files": "Томушо zxc це СФ!"
//     },
//     {
//         "author_id": 1,
//         "author_name": "zxc",
//         "name": "zxc?",
//         "descript": "Чому не варто звязуватися з zxc?",
//         "files": "Томушо zxc це СФ!"
//     },
//     {
//         "author_id": 1,
//         "author_name": "zxc",
//         "name": "a",
//         "descript": "a",
//         "files": "a"
//     },
//     {
//         "author_id": 1,
//         "author_name": "zxc",
//         "name": "a",
//         "descript": "a",
//         "files": "a"
//     },
//     {
//         "author_id": 2,
//         "author_name": "guller",
//         "name": "a",
//         "descript": "a",
//         "files": "a"
//     },
//     {
//         "author_id": 2,
//         "author_name": "guller",
//         "name": "a",
//         "descript": "a",
//         "files": "a"
//     }
// ];

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
  console.log(inputitem)
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