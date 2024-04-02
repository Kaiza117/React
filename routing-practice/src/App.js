import React from 'react';
import { Router } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Num from './components/Num.js';
import Word from './components/Word.js';
import Custom from './components/Custom.js';

function App() {

  return (
    <div className="App">
        <Router>
            <Welcome path="/home"/>
            <Num path="/:id"/>
            <Word path="/:word"/>
            <Custom path="/hello/:bgColor/:txtColor"/>
        </Router>
    </div>
  );
}

export default App;