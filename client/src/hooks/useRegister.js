import { useState } from "react";
import { checkArrayForEmptyString, isPassDiff } from "../utils/validations";

function useRegister() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRepasswordChange(e) {
        setRepassword(e.target.value);
    }

    function handleRegisterForm(e) {
        e.preventDefault();
        if (
            checkArrayForEmptyString([
                firstName,
                lastName,
                phone,
                email,
                password,
                repassword,
            ])
        ) {
            alert("All fields in the form are required");
            return;
        }

        if (isPassDiff(password, repassword)) {
            alert("Passwords don't match");
            return;
        }

        fetch("http://localhost:8081/api/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    return {
        firstName,
        lastName,
        phone,
        email,
        password,
        repassword,
        handleFirstNameChange,
        handleLastNameChange,
        handlePhoneChange,
        handleEmailChange,
        handlePasswordChange,
        handleRepasswordChange,
        handleRegisterForm,
    };
}

export { useRegister };
