import FlightRow from "./FlightRow/FlightRow";

function FlightsList({ data }) {
    function bookFlight(info) {
        alert(`You booked a flight, flight identifier: ${info.id} `);
    }

    if (!data) {
        return "Loading...";
    }

    return (
        <div>
            {data.map((item) => (
                <FlightRow
                    key={item.id}
                    flightInfo={item}
                    handleClick={bookFlight}
                />
            ))}
        </div>
    );
}

export default FlightsList;
