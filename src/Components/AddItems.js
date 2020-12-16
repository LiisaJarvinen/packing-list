import React from 'react';
import TripDetails from './TripDetails';

const AddItems = () => {

    return (
        <div className="AddItems">
            <p>Add Items to My Packing List</p>
            <TripDetails destination="Lapland" month="December" year="2020"/>
            <input 
              type="text"
              id="item"
              name="item"
              placeholder="Add item..."
            />
            <br/>
            <button onClick={addItem}>Add Item to Packing List</button>
        </div>
    )

    function addItem() {

        const itemName = document.getElementById("item").value;

        let item = {};
        item[itemName] = {name: itemName}
        alert ("Added " + document.getElementById("item").value + " to packing list")
    
        fetch("https://packing-list-4a102-default-rtdb.firebaseio.com/Packing%20List.json", {
          method: "PATCH",
          body: JSON.stringify(item)
        })
          .then(function(response) {
            
            if (response.status !== 200) {
              console.log(
                "Looks like there was a problem. Status Code: " + response.status
              );
              return;
            }
            
            response.json().then(function(data) {
              console.log(data);
            });
          })
          .catch(function(err) {
            console.log("Fetch Error : ", err);
          });
      }
}

export default AddItems;