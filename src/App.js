import Article from "./components/Article";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Article />}/>
        </Routes>
    </div>
  );
}

export default App;
