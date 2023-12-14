import { useState } from "react";
import { checkArrayForEmptyString } from "../utils/validations";

function useLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleLoginForm(e) {
        e.preventDefault();
        if (checkArrayForEmptyString([email, password])) {
            alert("Email and Password fields are required");
            return;
        }

        fetch("http://localhost:8081/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        // TODO add JWT from response to store
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }

    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleLoginForm,
    };
}

export { useLogin };
