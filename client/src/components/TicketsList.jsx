import TicketRow from "./TicketRow";

function TicketsList({ data, showTicket }) {
    if (!data) {
        return "Loading...";
    }

    return (
        <div>
            {data.map((item) => (
                <TicketRow
                    key={item.id}
                    flightInfo={item}
                    handleClick={showTicket}
                />
            ))}
        </div>
    );
}

export default TicketsList;
