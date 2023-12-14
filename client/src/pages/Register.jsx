import { Link } from "react-router-dom";
import PasswordInput from "../components/Inputs/PasswordInput";
import TextInput from "../components/Inputs/TextInput";
import EmailInput from "../components/Inputs/EmailInput";
import PhoneInput from "../components/Inputs/PhoneInput";
import SubmitInput from "../components/Inputs/SubmitInput";
import { useRegister } from "../hooks/useRegister";

function Register() {
    const {
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
    } = useRegister();

    return (
        <div>
            <form method="POST" onSubmit={handleRegisterForm}>
                <TextInput
                    labelText="First Name"
                    value={firstName}
                    changeHandler={handleFirstNameChange}
                />
                <TextInput
                    labelText="Last Name"
                    value={lastName}
                    changeHandler={handleLastNameChange}
                />
                <PhoneInput
                    labelText="Phone Number"
                    value={phone}
                    changeHandler={handlePhoneChange}
                />
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
                <PasswordInput
                    value={repassword}
                    changeHandler={handleRepasswordChange}
                    labelText="Repeast Password"
                />
                <SubmitInput value="Register" />
            </form>
            <p>
                You alread have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default Register;
