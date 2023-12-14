function EmailInput({ labelText, value, changeHandler }) {
    return (
        <label>
            {labelText}:
            <input type="email" value={value} onChange={changeHandler} />
        </label>
    );
}

export default EmailInput;
