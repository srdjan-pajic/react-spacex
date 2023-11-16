import { useState } from "react";
import FlightList from "./FlightList";
import useFetch from "./useFetch";

const Homepage = () => {
    const { data: flights, isPending, error } = useFetch('https://api.spacexdata.com/v5/launches');
    return (
        <div className="homepage">
            <div className="wrap">
                {isPending && <p>Loading....</p>}
                {error && <p>{error}</p>}
                {flights && <FlightList flights={flights} />}


            </div>
        </div>
    );
}

export default Homepage;