import { Link } from "react-router-dom";
import "./Testvisit.css"
const Testvisit =( ) =>{
  return(
    <div className="Testvisit">
      <div className="conteiner">
        <div className="button-add">
          <Link to="/test/add" className="buttonadd">button-add</Link>
        </div>
        <div className="Testvisit-row">
          
        </div>
      </div>
    </div>
  )
}
export default Testvisit;