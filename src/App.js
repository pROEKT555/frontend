import Home from "./componets/Home/Hoem";
import Registerform from "./componets/Login/Registerform";
import Menunav from "./componets/Menu-nav/Menunav";
import { Route,Routes} from "react-router-dom";
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
