
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import WebsiteLayout from "./components/Container/Body/WebsiteLayout";
import {Context} from "./components/Context/Context";
import {useState} from "react";
import data from "./assests/data";

function App() {
    const [posts , setPosts] = useState(data);
    const [showMenu , setShowMenu] = useState(true);

  return (
    <div>
        <Context.Provider value={{posts , setPosts, setShowMenu , showMenu}}>
        <Routes>
            <Route path="/" element={<WebsiteLayout />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
        </Context.Provider>
    </div>
  );
}

export default App;
