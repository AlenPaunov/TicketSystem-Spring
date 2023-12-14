function TicketRow({ flightInfo, handleClick }) {
    const { from, to, start, end, passenger, id, status } = flightInfo;
    // id should be changed to ticket id
    return (
        <div
            style={{
                border: "2px solid #000",
                margin: "10px 0",
                padding: "10px",
            }}
        >
            <span>Ticket number: {id}</span>
            <span>Status: {status}</span>
            <span>From: {from}</span>
            <span>To: {to}</span>
            <span>Start: {start}</span>
            <span>End: {end}</span>
            <span>
                Passenger name: {passenger.name} {passenger.surname}{" "}
            </span>
            <button onClick={() => handleClick(flightInfo.id)}>
                View info
            </button>
        </div>
    );
}

export default TicketRow;
