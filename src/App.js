import Home from "./componets/Home/Hoem";
import { useState } from "react";
import Registerform from "./componets/Register/Registerform";
import Loginform from "./componets/Login/Loginform";
import Menunav from "./componets/Menu-nav/Menunav";
import Kabinet from "./componets/Kabinet/Kabinet";
import { Route,Routes} from "react-router-dom";
function App() {
  const[isLoggedIn,setisLoggedIn] = useState(false);
  const[isName,setisName] = useState("");

  return (
     <div>
      
      <Menunav isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route exact path='/' element={<Home ></Home>}/>
        <Route exact path='/login' element={<Loginform setisLoggedIn={setisLoggedIn} setisName={setisName}></Loginform>}/>
        <Route exact path='/register' element={<Registerform ></Registerform>}/>
        <Route exact path='/kabinet' element={<Kabinet isLoggedIn={isLoggedIn} isName={isName}></Kabinet>}/>

      </Routes>
    </div>
  );
}

export default App;
