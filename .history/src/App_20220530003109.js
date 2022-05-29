import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';
import { useState } from 'react';
function App() {
  const [isEmpty, setIsEmpty] = useState(true);
  const
  return (
    <div className="landing">
        <Nav isEmpty={isEmpty}/>
        <hr class="line" />
        <Content isEmpty={isEmpty} />
    </div>
  );
}

export default App;
