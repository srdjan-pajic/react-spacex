import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from "./useFetch";
import Loader from "./Loader";
import myImage from './images/logo192.png';
import Search from "./Search";

const FlightList2 = () => {

    const [offset, setOffset] = useState(0);
    const limit = 18;

    const { data, isPending, error } = useFetch(`https://api.spacexdata.com/v3/launches?limit=${limit}&offset=${offset}`, offset);
    const [launches, setLaunches] = useState([]);

    const handleFetchMore = () => {
        setOffset(prevOffset => prevOffset + limit);
    };

    useEffect(() => {
        if (data) {
            if (!launches.length || launches[0].flight_number !== data[0].flight_number) {
                setLaunches(prev => [...prev, ...data]);
            }
        }
    }, [data]);

    return (
        <div className="flightlist">
            <Search />
            <h1>Flights List</h1>
            <InfiniteScroll
                dataLength={launches && launches.length}
                next={handleFetchMore}
                hasMore={launches && launches.length < 107}
                className="flightlist__container"
                loader={<Loader />}
            >
                {launches && launches.map((flight) => (
                    <div className="flightlist__item" key={flight.flight_number}>
                        <div className="flightlist__item-top">
                            <div className="flightlist__image-holder">
                                <img className="flightlist__image" src={flight.links.mission_patch_small === null ? myImage : flight.links.mission_patch_small} alt="Flight item" />
                            </div>
                            <h3 className="flightlist__name">{flight.mission_name}</h3>
                            <p className="flightlist__details">{flight.details}</p>
                            <span className="flightlist__date">{flight.date_utc}</span>
                            <span className="flightlist__date">{flight.flight_number}</span>
                        </div>
                        <div className="flightlist__item-bottom">
                            <Link to={`/flights/${flight.flight_number}`} className="flightlist__link">More Details</Link>
                        </div>
                    </div>
                ))}
            </InfiniteScroll>
            {error && <p>{error}</p>}
        </div>
    )
}

export default FlightList2;