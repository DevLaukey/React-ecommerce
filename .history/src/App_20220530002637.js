import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import { CheckoutContext } from './components/Context';
import { useState } from 'react';
function App() {
  const [isEmpty, setIsEmpty] = useState();
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
