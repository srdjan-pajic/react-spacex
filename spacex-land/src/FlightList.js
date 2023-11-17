import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

const FlightList = ({ flights }) => {
    const [search, setSearch] = useState('');

    return (
        <div className="flightlist">
            <Search onSearch={setSearch} />
            <h1>Flights List</h1>
            <div className="flightlist__container">
                {flights.filter((flight) => {
                    return search.toLowerCase() === ''
                        ? flight : flight.name.toLowerCase().includes(search);
                }).map((flight) => (
                    <div className="flightlist__item" key={flight.id}>
                        <div className="flightlist__image-holder">
                            <img className="flightlist__image" src={flight.links.patch.small} alt="Alt text" />
                        </div>
                        <h3 className="flightlist__name">{flight.name}</h3>
                        <p className="flightlist__details">{flight.details}</p>
                        <span className="flightlist__date">{flight.date_utc}</span>
                        <span className="flightlist__date">{flight.flight_number}</span>
                        <Link to={`/flights/${flight.id}`} className="flightlist__link">More Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FlightList;