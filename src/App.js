// import Home from "./componets/Home/Hoem";
// import Registerform from "./componets/Login/Registerform";
// import { Route,Routes} from "react-router-dom";
// import Menunav from "./componets/Menu-nav/Menunav";
import axios from "axios";
import React from "react";

class App extends React.Component{
  state = { details: [], }
  componentDidMount(){
    let data;
    axios.get('http://localhost:8000/login/')
    .then(res => {
      data = res.data;
      this.setState({
        details: data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
  render() {
    return (
      <div>
        <header>lala</header>
        <hr></hr>
        {this.state.details.map((output, id) => (
          <div key={id}>
            <div>
              <h2>{output.login}</h2>
              <p>{output.passworld}</p>
              <p>{output.email}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

// function App() {
//   return (
//      <div>
//       <Menunav/>
//       <Routes>
//         <Route exact path='/' element={<Home></Home>}/>
//         <Route exact path='/login' element={<Registerform></Registerform>}/>
//       </Routes>
//     </div>
//   );
// }

export default App;
