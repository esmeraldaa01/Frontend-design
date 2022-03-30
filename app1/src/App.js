import './App.css';
import Page from "./components/Page";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #4a4aea;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
       <Page/>
    </Wrapper>
  );
}

export default App;
