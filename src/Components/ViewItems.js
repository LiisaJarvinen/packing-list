import React, { useState, useEffect } from 'react';
import CreatePackingList from './CreatePackingList'

const ViewItems = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://packing-list-4a102-default-rtdb.firebaseio.com/Packing%20List.json")
          .then(function(response) {
            
            if (response.status !== 200) {
              console.log(
                "Looks like there was a problem. Status Code: " + response.status
              );
              return;
            }
            
            response.json().then(function(data) {
                const itemsArray = Array.from(Object.keys(data), k => data[k]);
                setItems(itemsArray);
            });
          })
          .catch(function(err) {
            console.log("Fetch Error : ", err);
          });
      }, []);
   
      const showItems = items.map((item, key) => {
          return <li key={key}>{item.name}</li>
      })

    return (
        <div>
            <h1>My Packing List to {props.destination} on {props.month} {props.year}</h1>
            <ul>
                {showItems}
            </ul>
        </div>
    )
}

export default ViewItems;