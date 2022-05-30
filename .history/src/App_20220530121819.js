
import "./App.css";
import Nav from "./components/Nav";
import Content from "./components/Content";
import { CardContext } from "./Contexts/CardContext";

function App() {
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);


  return (
    <div className="landing">
      <CardContext.Provider value={ }>
        <Nav />
        <hr class="line" />
        <Content />
      </CardContext.Provider>
    </div>
  );
}

export default App;
