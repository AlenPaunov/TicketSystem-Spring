import { useState } from "react";
import FlightsForm from "../components/FlightsForm";
import FlightsList from "../components/FlightsList";

const flightsData = [
    {
        id: 0,
        from: "Sofia",
        to: "Varna",
        departure: "2016-02-24 20:00:00",
        returnDate: "2016-02-28 15:30:00",
    },
    {
        id: 1,
        from: "London",
        to: "Varna",
        departure: "2016-02-24 20:00:00",
        returnDate: "2016-02-28 15:30:00",
    },
    {
        id: 2,
        from: "Madrid",
        to: "Barcelona",
        departure: "2016-02-24 20:00:00",
        returnDate: "2016-02-28 15:30:00",
    },
    {
        id: 3,
        from: "London",
        to: "Moscow",
        departure: "2016-02-24 20:00:00",
        returnDate: "2016-02-28 15:30:00",
    },
];

function Home() {
    const [data, setData] = useState(null);

    function getFlights(params) {
        // Call BE and get flights data

        setData(flightsData);
    }

    return (
        <div>
            <h1>Book your dream holiday</h1>
            <FlightsForm getFlights={getFlights} />
            <FlightsList data={data} />
        </div>
    );
}

export default Home;
