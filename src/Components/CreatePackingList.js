import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import AddItems from './AddItems';

const CreatePackingList = (props) => {

    return (
        <div>
            <h1>Welcome to My Packing List!</h1>
            <label>Where are you traveling to?</label>
            <br/>
            <input type="text" id="destination" />
            <br/>
            <label>When are you traveling?</label>
            <br/>
            <input type="text" id="month" placeholder="Insert Month"/>
            <br/>
            <input type="text" id="year" placeholder="Insert Year"/>
            <br/>
            <button>Start Listing Items</button>
        </div>
    )
}

export default CreatePackingList;