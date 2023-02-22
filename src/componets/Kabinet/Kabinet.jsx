import "./Kabinet.css";
import myPhoto from './Без названия.jfif';
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
              <img className="foto-user" alt="Моэфото" src={myPhoto}></img>
            </div>
            <div className="kabinet-right">
              <div className="Kabinet-datauser-name">
                Імя: {props.isName}
              </div>
              <div className="Kabinet-datauser-gmail">
                Пошта: {props.isEmail}
              </div>
            </div>

          </div>
          <div className="Kabinet-datauser-editprofil">
            <Link className="Kabinet-datauser-editprofil__a">Редагувати профіль</Link>
          </div>
          <div className="Kabinet-datafile">
          </div>
        </div>
      </div>
    )
  }
}
export default Kabinet;