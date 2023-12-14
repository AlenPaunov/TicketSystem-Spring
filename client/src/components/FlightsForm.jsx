import { useState } from "react";
import SelectInput from "./Inputs/SelectInput";

const destinationsList = [
    {
        value: "SOF",
        label: "Sofia",
    },
    {
        value: "VN",
        label: "Varna",
    },
    {
        value: "JFK",
        label: "London",
    },
];

function FlightsForm({ getFlights }) {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [period, setPeriod] = useState({
        departure: null,
        returnDate: null,
    });

    function handleFromSelection(e) {
        setFrom(e.target.value);
    }

    function handleToSelection(e) {
        setTo(e.target.value);
    }

    function handleDepartureDate(e) {
        setPeriod((period) => {
            return { ...period, departure: e.target.value };
        });
    }

    function handleReturnDate(e) {
        setPeriod((period) => {
            return { ...period, returnDate: e.target.value };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const params = {
            from,
            to,
            ...period,
        };

        console.log(params);
        // all validaitons pass
        getFlights(params);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SelectInput
                    labelText="From"
                    value={from}
                    changeHandler={handleFromSelection}
                    options={destinationsList}
                />
                <SelectInput
                    labelText="To"
                    value={to}
                    changeHandler={handleToSelection}
                    options={destinationsList}
                />
                <label>
                    departure date
                    <input
                        type="date"
                        value={period.departure}
                        onChange={handleDepartureDate}
                    />
                </label>

                <label>
                    Return date
                    <input
                        type="date"
                        value={period.returnDate}
                        onChange={handleReturnDate}
                    />
                </label>
                <input type="submit" value="Look for a flights" />
            </form>
        </div>
    );
}

export default FlightsForm;
