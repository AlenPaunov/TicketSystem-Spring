import { Link } from "react-router-dom";
import PasswordInput from "../components/Inputs/PasswordInput";
import EmailInput from "../components/Inputs/EmailInput";
import SubmitInput from "../components/Inputs/SubmitInput";
import { useLogin } from "../hooks/useLogin";

import './Login.css';

function Login() {
    const {
        email,
        password,
        handleEmailChange,
        handleLoginForm,
        handlePasswordChange,
    } = useLogin();

    return (
        <div>
            <form class="login-form" method="POST" onSubmit={handleLoginForm}>
                <EmailInput
                    value={email}
                    changeHandler={handleEmailChange}
                    labelText="Email"
                />
                <PasswordInput
                    value={password}
                    changeHandler={handlePasswordChange}
                    labelText="Password"
                />
                <SubmitInput value="Login" />
            </form>
            <p>
                You don't have an account yet?{" "}
                <Link to="/register">Register</Link>
            </p>
        </div>
    );
}

export default Login;
