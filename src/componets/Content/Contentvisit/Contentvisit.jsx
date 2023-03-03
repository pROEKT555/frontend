import './Contentvisit.css'
import { Link } from 'react-router-dom';
const Contentvisit =() =>{
  return(
    <div className='Contentvisit'>
      <div className='conteiner'>
        <div className='content-add'>
          <Link to='/contentadd' className='content-add__Link'>Дотати контент</Link>
        </div>
        <div className='content-visit'>

        </div>
      </div>

    </div>
  )
}
export default Contentvisit;