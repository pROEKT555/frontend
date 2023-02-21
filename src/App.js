import Home from "./componets/Home/Hoem";
import { useState } from "react";
import Registerform from "./componets/Register/Registerform";
import Loginform from "./componets/Login/Loginform";
import Menunav from "./componets/Menu-nav/Menunav";
import { Route,Routes} from "react-router-dom";
function App() {
  const[isLoggedIn,setisLoggedIn] = useState(false);
  return (
     <div>
      
      <Menunav/>
      <Routes>
        <Route exact path='/' element={<Home ></Home>}/>
        <Route exact path='/login' element={<Loginform setisLoggedIn={setisLoggedIn}></Loginform>}/>
        <Route exact path='/register' element={<Registerform ></Registerform>}/>

      </Routes>
    </div>
  );
}

export default App;
