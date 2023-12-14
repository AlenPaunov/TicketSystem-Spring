import styles from "./TicketDetails.module.css";

function TicketDetails({ ticket, closeTicket }) {
    const { passenger, departure, from, to, returnDate } = ticket;

    return (
        <div className={styles.container}>
            <div className={styles.ticketInfo}>
                <h2>Ticket Info</h2>
                <span onClick={closeTicket} className={styles.closeBtn}>
                    X
                </span>
                <h3>
                    Passenger: {passenger.name} {passenger.surname}
                </h3>
                <div>
                    <h3>Departure Info</h3>
                    <p>From: {from}</p>
                    <p>Date and time: {departure} </p>
                </div>
                <div>
                    <h3>Return Info</h3>
                    <p>From: {to}</p>
                    <p>Date and time: {returnDate} </p>
                </div>
            </div>
        </div>
    );
}

export default TicketDetails;
