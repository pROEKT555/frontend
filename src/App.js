import Home from "./componets/Home/Hoem";
import Registerform from "./componets/Login/Registerform";
import { Route,Routes} from "react-router-dom";
import Menunav from "./componets/Menu-nav/Menunav";
function App() {
  return (
    <div>
      <Menunav/>
      <Routes>
        
        <Route exact path='/' element={<Home></Home>}/>
        <Route exact path='/login' element={<Registerform></Registerform>}/>
      </Routes>
    </div>
  );
}

export default App;
