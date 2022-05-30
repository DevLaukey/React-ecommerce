
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { CardContext } from "./Contexts/CardContext";

function App() {


  return (
    <div className="landing">
      <CardContext>
        <Nav />
        <hr class="line" />
        <Content />
      </CardContext>
    </div>
  );
}

export default App;
