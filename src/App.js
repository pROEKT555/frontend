import Home from "./componets/Home/Hoem";
import { useState } from "react";
import axios from "axios";
import Registerform from "./componets/Register/Registerform";
import Loginform from "./componets/Login/Loginform";
import Menunav from "./componets/Menu-nav/Menunav";
import Cookies from "js-cookie";
import Kabinet from "./componets/Kabinet/Kabinet";
import Contentadd from "./componets/Content/Contentadd/Contentadd";
import { Route,Routes} from "react-router-dom";
import Contentvisit from "./componets/Content/Contentvisit/Contentvisit";
import Testadd from "./componets/Test/Testadd";
import Testvisit from "./componets/Testvisit/Testvisit";
function App() {
  console.log()
  const[isLoggedIn,setisLoggedIn] = useState(false);
  const[isIdacaynt,setisIdacaynt] = useState(Cookies.get('id'));
  const[isName,setisName] = useState(Cookies.get('User'));
  const[isEmail,setisEmail] = useState(Cookies.get('email'));
  const[ispasword,setispasword] = useState(Cookies.get('pasword'));
  axios.post('http://localhost:8000/login/', {
    login: isName,
    passworld: ispasword
  })
  .then(function (response) {
    console.log(response.data.has_user_found,response.data.passworld_is_correct)
    if(response.data.has_user_found===true && response.data.passworld_is_correct===true){
      setisLoggedIn(true)
    }else{
      setisLoggedIn(false)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  return (
     <div>
      
      <Menunav isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route exact path='/contentvasit' element={<Contentvisit/>}/>
        <Route exact path='/' element={<Home ></Home>}/>
        <Route exact path='/login' element={<Loginform setisIdacaynt={setisIdacaynt} setispasword={setispasword} setisLoggedIn={setisLoggedIn} setisName={setisName} setisEmail={setisEmail}></Loginform>}/>
        <Route exact path='/register' element={<Registerform ></Registerform>}/>
        <Route exact path='/kabinet' setisLoggedIn={setisLoggedIn} element={<Kabinet isEmail={isEmail} isLoggedIn={isLoggedIn} isName={isName}></Kabinet>}/>
        <Route exact path='/contentadd'  isLoggedIn={isLoggedIn} element={<Contentadd isIdacaynt={isIdacaynt} ></Contentadd>}/>
        <Route exact path='/contentadd'  isLoggedIn={isLoggedIn} element={<Contentadd isIdacaynt={isIdacaynt} ></Contentadd>}/>
        <Route exact path='/test/add' element={<Testadd isIdacaynt={isIdacaynt}></Testadd>}/>
        <Route exact path='/test' element={<Testvisit></Testvisit>}/>
      </Routes>
    </div>
  );
}

export default App;
