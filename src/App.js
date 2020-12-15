import React from 'react';
import './App.css';
import AddItems from './Components/AddItems';
import ViewItems from './Components/ViewItems';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>Add Items to Packing List</li>
          <li>View Packing List</li>
        </ul>
      </nav>
      <div>
        <AddItems />
        <ViewItems destination="Lapland" month="December" year="2020"/>
      </div>
    </div>
  );
}

export default App;
