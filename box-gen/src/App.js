import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import BoxMaker from './components/BoxMaker';
import NewBox from './components/NewBox';

function App() {

  const [allAttr, setAllAttr] = useState([]);
  
  const addBox = ( boxAttr ) => {
    setAllAttr([ ...allAttr, [boxAttr] ]);
  }

  return (
    <div className="App">
      <BoxMaker title="Box color and height" createBox = { addBox } />

      <div className="boxes">
          <NewBox color={ allAttr }/>
      </div>
      
    </div>  
  );
}

export default App;
