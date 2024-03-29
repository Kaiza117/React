import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TabContent from './components/tabcontent';


function App() {
  const [tab, setTab] = useState({
    content: ["Whoa look at me! I'm a TAB", "WHAT!? I HAVE TWO TABS", "SO MANY TABSSS!!!"],
    selectedTab: 0,
  })
  
  
  return (
    <div className= "container">
      <h1>TABS</h1>
      <TabContent tab={tab} setTab={setTab}/>
    </div>
  );
}

export default App;
