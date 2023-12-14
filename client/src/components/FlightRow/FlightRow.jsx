import styles from "./FlightRow.module.css";

function FlightRow({ flightInfo, handleClick }) {
    const { from, to, departure, returnDate } = flightInfo;

    return (
        <div className={styles.container}>
            <div className={styles.flightInfoWrapper}>
                <div>
                    <span className={styles.text}>
                        {departure.split(" ")[1]} ({from}) {"=>"}
                    </span>
                    <span className={styles.text}>15:34:00 ({to})</span>
                </div>
                <div>
                    <span className={styles.text}>
                        {returnDate.split(" ")[1]} ({to}) {"=>"}
                    </span>
                    <span className={styles.text}>15:34:00 ({from})</span>
                </div>
            </div>
            <div className={styles.flightPriceWrapper}>
                <span className={styles.price}>$145</span>
                <button onClick={() => handleClick(flightInfo)}>Book</button>
            </div>
        </div>
    );
}

export default FlightRow;
