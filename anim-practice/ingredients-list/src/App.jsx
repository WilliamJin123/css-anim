import { useState } from 'react';
import './App.css';
import { tabs } from './Ingredients';


function App() {
  const [selected, setSelected] = useState(tabs[0])
  const tabList = tabs.map((tab, index) => (
    <li key={index}
      onClick={() => setSelected(tabs[index])}
    >
      <span>{tab.icon}</span>
      <span>{tab.label}</span>
    </li>
  ))
  return (
    <div className="main">
      <ul className='ingred-list'>
        {tabList}
      </ul>
      <div className='selected'>
        {selected.icon}
      </div>
    </div>
  );
}

export default App;