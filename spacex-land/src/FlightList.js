import { useState } from "react";

const FlightList = ({ flights }) => {

    return (
        <div className="flightlist">
            <h1>Flights List</h1>
            <div className="flightlist__container">
                {flights.map((flight) => (
                    <div className="flightlist__item" key={flight.id}>
                        <div className="flightlist__image-holder">
                            <img src={flight.links.patch.small} alt="Image" />
                        </div>
                        <p>{flight.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlightList;