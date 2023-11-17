import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const FlightDetails = () => {
    const { id } = useParams();
    const { data: flight, error, isPending } = useFetch('https://api.spacexdata.com/v5/launches/' + id);
    return (
        <div className="flight-details">
            <div className="wrap">
                <h2 className="flight-details__title">Flight Details</h2>
                {isPending && <p>Loading...</p>}
                {error && <div className="flight-details__error">{error}</div>}
                {flight && (
                    <div>
                        <h2 className="flight-details__title">{flight.name}</h2>
                        <img src={flight.links.patch.small} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default FlightDetails;