import Home from "./componets/Home/Hoem";
import Registerform from "./componets/Login/Registerform";
import { Route,Routes} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home></Home>}/>
      <Route exact path='/login' element={<Registerform></Registerform>}/>
    </Routes>
  );
}

export default App;
