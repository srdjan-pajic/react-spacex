import { Link } from "react-router-dom";

const FlightList = ({ flights }) => {

    return (
        <div className="flightlist">
            <h1>Flights List</h1>
            <div className="flightlist__container">
                {flights.map((flight) => (
                    <div className="flightlist__item" key={flight.id}>
                        <div className="flightlist__image-holder">
                            <img className="flightlist__image" src={flight.links.patch.small} alt="Image" />
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