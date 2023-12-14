import { useEffect, useState } from "react";
import TicketsList from "../components/TicketsList";
import TicketDetails from "../components/TicketDetails/TicketDetails";
import { getTicketInfo } from "../apis/ajax";

const ticketsData = [
    {
        id: 0,
        flightId: 0,
        from: "Sofia",
        to: "Varna",
        start: "2016-02-24",
        end: "2016-02-28",
        passenger: {
            name: "Ivan",
            surname: "Ivanov",
        },
        status: "Completed",
    },
    {
        id: 1,
        flightId: 1,
        from: "London",
        to: "Varna",
        start: "2016-02-24",
        end: "2016-02-28",
        passenger: {
            name: "Ivan",
            surname: "Ivanov",
        },
        status: "Cancled",
    },
    {
        id: 2,
        flightId: 1,
        from: "Madrid",
        to: "Barcelona",
        start: "2016-02-24",
        end: "2016-02-28",
        passenger: {
            name: "Ivan",
            surname: "Ivanov",
        },
        status: "Active",
    },
    {
        id: 3,
        flightId: 3,
        from: "London",
        to: "Moscow",
        start: "2016-02-24",
        end: "2016-02-28",
        passenger: {
            name: "Ivan",
            surname: "Ivanov",
        },
        status: "Completed",
    },
];

function UserTickets() {
    const [data, setData] = useState(null);
    const [ticketInfo, setTicketInfo] = useState(null);

    useEffect(() => {
        // Fetch user ticket
        setData(ticketsData);
    }, []);

    async function showTicket(id) {
        // Fetch ticket data
        const ticket = await getTicketInfo(id);
        // setTicketInfo(ticket);
        setTicketInfo({
            id: 0,
            passenger: {
                name: "Ivan",
                surname: "Ivanov",
            },
            from: "Sofia",
            to: "Varna",
            departure: "2023.12.15 15:30:00",
            returnDate: "2023.12.18 17:30:00",
        });
    }

    function closeTicket() {
        setTicketInfo(null);
    }

    return (
        <div>
            <h1>My tickets</h1>
            <div>
                <h2>Filters</h2>
                <button>Active</button>
                <button>Completed</button>
                <button>Cancled</button>
            </div>
            <TicketsList data={data} showTicket={showTicket} />
            {ticketInfo && (
                <TicketDetails ticket={ticketInfo} closeTicket={closeTicket} />
            )}
        </div>
    );
}

export default UserTickets;
