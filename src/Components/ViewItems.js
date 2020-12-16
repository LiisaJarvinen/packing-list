import React, { useState, useEffect } from 'react';
import TripDetails from './TripDetails';

const ViewItems = () => {

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
        <div className="ViewItems">
            <p>My Packing List</p>
            <TripDetails destination="Lapland" month="December" year="2020"/>
            <ul>
                {showItems}
            </ul>
        </div>
    )
}

export default ViewItems;