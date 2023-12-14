function SelectInput({ labelText, value, changeHandler, options = [] }) {
    return (
        <label>
            {labelText}
            <select value={value} onChange={changeHandler}>
                <option></option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default SelectInput;
