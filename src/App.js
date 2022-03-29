import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import WebsiteLayout from "./components/Container/Body/WebsiteLayout";
import {Context} from "./components/Context/Context";
import {useState} from "react";
import data from "./assests/data";
import {Layout} from "antd";
import HeaderMenu from "./components/Header/HeaderMenu";
import SideFooter from "./components/Footer/SideFooter";
import Menu from "./components/Header/Menu";

function App() {
    const [posts, setPosts] = useState(data);
    const [ showMenu , setShowMenu ] = useState(true);

    const displayMenu = (bool) => {
     setShowMenu(bool)
    }

    return (
        <div>
        <Context.Provider value={{posts, setPosts }}>
            <Router>
                <Layout>
                    <Layout.Header style={{height: showMenu ? 85 : 55}}>
                        <HeaderMenu displayMenu={displayMenu}/>
                        {showMenu && <Menu/>}
                    </Layout.Header>
                        <Routes>
                            <Route path="/" element={<WebsiteLayout/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/signup" element={<Signup/>}/>
                        </Routes>
                    <Layout.Footer style={{backgroundColor: 'white', padding: '0px'}}>
                        <SideFooter/>
                    </Layout.Footer>
                </Layout>
            </Router>
        </Context.Provider>
    </div>
    );
}

export default App;
