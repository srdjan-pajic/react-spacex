import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const FlightList = ({ flights }) => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [showLoader, setShowLoader] = useState(false);
    const itemsPerPage = 18;

    const filteredFlights = flights.filter((flight) => {
        return search.toLowerCase() === ''
            ? flight : flight.name.toLowerCase().includes(search);
    });
    const displayFlights = filteredFlights.slice(0, page * itemsPerPage);

    const handleFetchData = () => {
        setShowLoader(true);
        setTimeout(() => {
            setPage(page + 1);
            setShowLoader(false);
        }, 2000);
    };

    return (
        <div className="flightlist">
            <Search onSearch={setSearch} />
            <h1>Flights List</h1>
            <InfiniteScroll
                dataLength={displayFlights.length}
                next={handleFetchData}
                hasMore={displayFlights.length < filteredFlights.length}
                className="flightlist__container"
            >
                {displayFlights.map((flight) => (
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
            </InfiniteScroll>
            {showLoader && <Loader />}
        </div>
    );
}

export default FlightList;