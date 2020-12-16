import React from 'react';

const TripDetails = (props) => {
    return <p> for My Trip <b>to {props.destination} on {props.month} {props.year}</b></p>
}

export default TripDetails;