import React, { useState } from 'react';

const AddItems = (props) => {

    const [item, setItem] = useState({});
    const baseurl = "https://packing-list-4a102-default-rtdb.firebaseio.com/Packing%20List"
    
    return (
        <div>
            <h1>Add Items to Packing List</h1>
            <label>Add Item: </label>
            <br/>
            <input />
            <br/>
            <button onClick={save}>Save</button>
        </div>
    )

    function save() {
    
        const url = baseurl + ".json";
        
        fetch(url, {
          method: "PATCH",
          "Content-Type": "application/json",
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