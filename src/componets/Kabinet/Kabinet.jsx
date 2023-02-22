import "./Kabinet.css"

import { Link } from "react-router-dom";
const Kabinet =(props) =>{
  if(props.isLoggedIn===false){
    return(
      <div>
        Ви невійшли в акаунт
      </div>
    )
  }else if (props.isLoggedIn===true){
    return(
      <div className="Kabinet">
        <div className="conteiner">
          <div className="Kabinet-datauser">
            <div className="Kabinet-datauser-img">
              <img alt="" src=""></img>
            </div>
            <div className="Kabinet-datauser-name">
              name {props.isName}
            </div>
            <div className="Kabinet-datauser-gmail">
              name {props.isEmail}
            </div>
            <div className="Kabinet-datauser-editprofil">
              <Link>Редагувати профіль</Link>
            </div>
          </div>
  
          <div className="Kabinet-datafile">
          </div>
        </div>
      </div>
    )
  }
}
export default Kabinet;