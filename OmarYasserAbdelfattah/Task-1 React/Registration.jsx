import "./Registration.css";

function Registration() {
    return (
        <div className="registration-container">
            <form className="registration-form">
                <h3>Register:</h3>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;
