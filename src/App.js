import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/HomeRoute";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
