import React, { useState, useEffect } from 'react';

const ViewItems = (props) => {

    const [items, setItems] = useState({});
    const baseurl = "https://packing-list-4a102-default-rtdb.firebaseio.com/Packing%20List"

    useEffect(() => {
        fetch(baseurl + ".json")
          .then(function(response) {
            
            if (response.status !== 200) {
              console.log(
                "Looks like there was a problem. Status Code: " + response.status
              );
              return;
            }
            
            response.json().then(function(data) {
              setItems(data);
            });
          })
          .catch(function(err) {
            console.log("Fetch Error : ", err);
          });
      }, []);

      const itemsArray = Array.from(Object.keys(items), k => items[k]);
      const showitems = itemsArray.map((item, key) => {
          return <li key={key}>{item.name}</li>
      })

    return (
        <div>
            <h1>My Packing List to {props.destination} on {props.month} {props.year}</h1>
            <ul>
                {showitems}
            </ul>
        </div>
    )
}

export default ViewItems;