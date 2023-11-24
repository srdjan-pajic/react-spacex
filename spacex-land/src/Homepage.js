// import FlightList from "./FlightList";
// import useFetch from "./useFetch";
// import Loader from "./Loader";
import FlightList2 from "./FlightList2";

const Homepage = () => {
    // const { data: flights, isPending, error } = useFetch('https://api.spacexdata.com/v3/launches?limit=18&offset=0');
    return (
        <div className="homepage">
            <div className="wrap">
                <FlightList2 />
                {/* {isPending && <Loader />}
                {error && <p>{error}</p>}
                {flights && <FlightList flights={flights} />} */}
            </div>
        </div>
    );
}
export default Homepage;