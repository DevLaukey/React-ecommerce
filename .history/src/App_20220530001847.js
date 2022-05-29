import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import { CheckoutContext } from './components/CheckoutContext';
function App() {
  return (
    <div className="landing">
      <CheckoutContext>
        <Nav />
        <hr class="line" />
        <Content />
      </CheckoutContext>
    </div>
  );
}

export default App;
