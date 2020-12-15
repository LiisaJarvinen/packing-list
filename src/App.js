import React from 'react';
import './App.css';
import CreatePackingList from './Components/CreatePackingList';
import AddItems from './Components/AddItems';
import ViewItems from './Components/ViewItems';
import { Route, BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <ul>
        <li>
            <Link to="/create">Create Packing List</Link>
          </li>
          <li>
            <Link to="/view">View Packing List</Link>
          </li>
          <li>
            <Link to="/add">Add Items to Packing List</Link>
          </li>   
        </ul>
      </nav>
        <Route path="/create" exact component={CreatePackingList} />
        <Route path="/view" exact component={ViewItems} />
        <Route path="/add" exact component={AddItems} />    
      </BrowserRouter>   
    </div>
  );
}

export default App;
