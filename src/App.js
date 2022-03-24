import Article from "./components/Article";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Article />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
    </div>
  );
}

export default App;
