import React, { Component } from 'react';
import './Signup.css'; // You can create a separate CSS file for styling
import { signup } from '../common/APIUtils';
import Alert from 'react-s-alert';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '', // The email will be obtained from Microsoft login
            dietaryPreferences: '',
            favoriteLocation: '',
            password: '',
            confirmPassword: '',
            passwordError: '',
            dietaryPreferences: [],
            specificPreference: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDietaryPreferenceChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
    
        this.setState((prevState) => {
          if (isChecked) {
            return {
              dietaryPreferences: [...prevState.dietaryPreferences, value]
            };
          } else {
            return {
              dietaryPreferences: prevState.dietaryPreferences.filter(
                (preference) => preference !== value
              )
            };
          }
        });
      };

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    validatePassword(password) {
        // Use regular expressions to enforce password complexity
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/;

        if (!regex.test(password)) {
            return 'Password must contain at least 1 uppercase, 1 lowercase, 1 number, and be 6-16 characters long.';
        }
        return '';
    }

    handleSubmit(event) {
        event.preventDefault();

        const { password, confirmPassword } = this.state;

        // Validate password
        const passwordError = this.validatePassword(password);
        if (passwordError) {
            this.setState({ passwordError });
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            this.setState({ passwordError: 'Passwords do not match' });
            return;
        }

        const signupRequest = {
            email: this.state.email,
            dietaryPreferences: this.state.dietaryPreferences,
            favoriteLocation: this.state.favoriteLocation,
            password: this.state.password
        };

        signup(signupRequest)
            .then(response => {
                Alert.success('Registration successful! You can now log in.');
                this.props.history.push('/login'); // Redirect to login page after successful signup
            })
            .catch(error => {
                Alert.error((error && error.message) || 'Something went wrong. Please try again.');
            });
    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-item">
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                value={this.state.email}
                                readOnly
                            />
                        </div>
                        <div className="dietary">
  <label className="dietary-label"><h2>Préférences Alimentaires</h2></label>
  <div className="dietary-options">
    <label className="dietary-option">
      <input
        type="checkbox"
        name="dietaryPreference"
        value="vegetarian"
        checked={this.state.dietaryPreferences.includes("vegetarian")}
        onChange={this.handleDietaryPreferenceChange}
      />
      Végétarien
    </label>
    <label className="dietary-option">
      <input
        type="checkbox"
        name="dietaryPreference"
        value="vegan"
        checked={this.state.dietaryPreferences.includes("vegan")}
        onChange={this.handleDietaryPreferenceChange}
      />
      Végétalien
    </label>
    <label className="dietary-option">
      <input
        type="checkbox"
        name="dietaryPreference"
        value="glutenFree"
        checked={this.state.dietaryPreferences.includes("glutenFree")}
        onChange={this.handleDietaryPreferenceChange}
      />
      Sans gluten
    </label>
    <label className="dietary-option">
      <input
        type="checkbox"
        name="dietaryPreference"
        value="nutFree"
        checked={this.state.dietaryPreferences.includes("nutFree")}
        onChange={this.handleDietaryPreferenceChange}
      />
      Sans noix
    </label>
    <label className="dietary-option">
      <input
        type="checkbox"
        name="dietaryPreference"
        value="lactoseFree"
        checked={this.state.dietaryPreferences.includes("lactoseFree")}
        onChange={this.handleDietaryPreferenceChange}
      />
      Sans lactose
    </label>
  </div>
  <input
    type="text"
    name="specificPreference"
    className="form-control"
    placeholder="Spécifique (si cela est nécessaire.)"
    value={this.state.specificPreference}
    onChange={this.handleInputChange}
  />
</div>


                        <div className="favLoc">
                            <label className="favLoc-label"><h2>Favorite Location</h2></label>
                                <select
                                    id="favoriteLocation"
                                    name="favoriteLocation"
                                    className="favLoc-control"
                                    value={this.state.favoriteLocation}
                                    onChange={this.handleInputChange}
                                    required
                                >
                                    <option value="">Select a location</option>
                                    <option value="Cercle_Youssoufia">Cercle Youssoufia</option>
                                    <option value="ClubPhosphatier_Youssoufia">Club Phosphatier Youssoufia</option>
                                    <option value="ClubEquestre_Youssoufia">Club Equestre Youssoufia</option>
                                    <option value="Cercle_Benguerir">Cercle Benguerir</option>
                                    <option value="ClubPhosphatier_Benguerir">Club Phosphatier Benguerir</option>
                                </select>
                        </div>

                        <div className="form-item">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-item">
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={this.state.confirmPassword}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        {this.state.passwordError && (
                            <div className="error-message">{this.state.passwordError}</div>
                        )}
                        <div className="form-item">
                            <button type="submit" className="btn btn-block btn-primary">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
