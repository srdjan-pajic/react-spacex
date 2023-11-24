import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const FlightDetails = () => {
    const { flight_number } = useParams();
    const { data: flight, error, isPending } = useFetch('https://api.spacexdata.com/v3/launches/' + flight_number);
    return (
        <div className="flight-details">
            <div className="wrap">
                <h2 className="flight-details__title">Flight Details</h2>
                {isPending && <p>Loading...</p>}
                {error && <div className="flight-details__error">{error}</div>}
                {flight && flight.links && (
                    <div className="flight-details__holder">
                        <h2 className="flight-details__heading">{flight.mission_name}</h2>
                        <img className="flight-details__image" src={flight.links.mission_patch} alt="Flight details sign" />
                        <p className="flight-details__text details-text">{flight.details}</p>
                        <p className="flight-details__number details-text"><span className="bold">Flight number:</span> {flight.flight_number}</p>
                        <p className="flight-details__name details-text"><span className="bold">Name of rocket:</span> {flight.rocket.rocket_id}</p>
                        <p className="flight-details__date details-text"><span className="bold">Flight date:</span> {flight.launch_date_utc}</p>
                        <Link to={'https://spaceflightnow.com/2020/03/07/late-night-launch-of-spacex-cargo-ship-marks-end-of-an-era/'} className="flight-details__link">{flight.links.article_link}</Link>
                        <Link to={'https://en.wikipedia.org/wiki/SpaceX_CRS-20'} className="flight-details__link">{flight.links.wikipedia}</Link>
                        <Link to={'/'} className="flight-details__back">&#8592; Back to Flight List</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FlightDetails;