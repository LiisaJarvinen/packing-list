import React from 'react';

const AddItems = (props) => {

    return (
        <div>
            <h1>Add Items to Packing List</h1>
            <label>Add Item: </label>
            <br/>
            <input 
              type="text"
              id="item"
              name="item"
            />
            <br/>
            <button onClick={addItem}>Add to Packing List</button>
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