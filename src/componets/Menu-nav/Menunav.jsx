import "./Menu-nav.css"
import {Link} from "react-router-dom";
const Menunav = () =>{
  return(
    <div className="Menu">
      <nav className="Menu-test">
        <ul>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/login">Login</Link> </li>
        </ul>
      </nav>
    </div>
  )
}
export default Menunav;