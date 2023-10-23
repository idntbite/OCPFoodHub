import React, { Component } from 'react';
import './Login.css';
import { ACCESS_TOKEN } from '../resources';
import { login } from '../common/APIUtils';
import { Link, Redirect } from 'react-router-dom';
import MsLogo from '../resources/microsoft-logo.png';
import Alert from 'react-s-alert';

class Login extends Component {
    componentDidMount() {
        if (this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }

    render() {
        if (this.props.authenticated) {
            return (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: this.props.location }
                    }}
                />
            );
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login</h1>
                    <LoginForm {...this.props} />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    {/* Add Microsoft Outlook Login Button */}
                    <MicrosoftOutlookLogin />
                    <span className="signup-link">
                        New to OCPFoodHub? <Link to="/signup">
                            Sign up!</Link>
                    </span>
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("You're successfully logged in!");
                this.props.history.push("/");
                window.location.reload();
            })
            .catch(error => {
                Alert.error(
                    (error && error.message) || 'Something went wrong. Please try again!'
                );
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        autoComplete="off"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        autoComplete="off"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <button type="submit" className="btn-login" >
                        Login
                    </button>
                </div>
            </form>
        );
    }
}

class MicrosoftOutlookLogin extends Component {
    constructor(props) {
        super(props);

        this.handleMicrosoftOutlookLogin = this.handleMicrosoftOutlookLogin.bind(this);
    }

    handleMicrosoftOutlookLogin() {
        // Redirect the user to Microsoft's OAuth2 authorization URL
        window.location.href = 'YOUR_MICROSOFT_OAUTH2_URL_HERE';
    }

    render() {
        return (
            <div className="outlook-login">
                <button className="btn-ms" onClick={this.handleMicrosoftOutlookLogin}>
                    <img src={MsLogo} alt="Microsoft" /> 
                    <span className="btn-ms text">
                        Log in with Microsoft Outlook
                    </span>
                </button>
            </div>
        );
    }
}

export default Login;
