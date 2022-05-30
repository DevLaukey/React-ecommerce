
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { CardContext } from "./Contexts/CardContext";

function App() {


  return (
    <div className="landing">
      <CardContext.Provider>
        <Nav />
        <hr class="line" />
        <Content />
      </CardContext.Provider>
    </div>
  );
}

export default App;
