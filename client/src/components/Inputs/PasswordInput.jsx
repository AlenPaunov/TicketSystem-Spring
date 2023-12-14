function PasswordInput({ labelText, value, changeHandler }) {
    return (
        <label>
            {labelText}:
            <input type="password" value={value} onChange={changeHandler} />
        </label>
    );
}

export default PasswordInput;
