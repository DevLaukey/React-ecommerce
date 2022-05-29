import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import { CheckoutContext } from './components/Context';
import { useState } from 'react';
function App() {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <div className="landing">
      <CheckoutContext>
        <Nav isEmpty={isEmpty}/>
        <hr class="line" />
        <Content isEmpty={isEmpty} />
      </CheckoutContext>
    </div>
  );
}

export default App;
