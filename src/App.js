
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import WebsiteLayout from "./components/WebsiteLayout";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<WebsiteLayout />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
    </div>
  );
}

export default App;
