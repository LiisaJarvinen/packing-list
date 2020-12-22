import React from 'react';
import './Menu.css';
import AddItems from '../Components/AddItems';
import ViewItems from '../Components/ViewItems';
import { Route, BrowserRouter, Link } from 'react-router-dom';

const Menu = () => {

  const style = {
    'textDecoration' : 'none', 
    'color' : 'black',
    'fontFamily' : 'Helvetica',
    'fontSize' : '26px',
  }

  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
          <li className="menubar">
            <Link to="/add" style={style}>Add Items to Packing List</Link>
          </li> 
          <li className="menubar">
            <Link to="/view" style={style}>View Packing List</Link>
          </li> 
        </ul>
        <h1>Welcome to My Packing List!</h1>
        <p>With this app you can add items to your packing list 
          <br/>
          and view what is on the packing list.</p>
      </nav>
        <Route path="/view" exact component={ViewItems} />
        <Route path="/add" exact component={AddItems} />    
      </BrowserRouter>   
    </div>
  );
}

export default Menu;