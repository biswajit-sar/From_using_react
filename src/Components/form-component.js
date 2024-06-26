import React from "react";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const phoneValidator = /^[0-9]{10}$/;
const panValidator = /^[0-9]{10}$/;
const aadharValidator = /^[0-9]{12}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      emailAddress: "",
      password: "",
      phoneno: "",
      country: "",
      city: "",
      panno: "",
      aadharno: "",
      passwordConfirmation: "",
      firstNameError: "",
      lastNameError: "",
      userNameError: "",
      emailAddressError: "",
      passwordError: "",
      phonenoError: "",
      countryError: "",
      cityError: "",
      pannoError: "",
      aadharnoError: "",
      passwordConfirmationError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBlur(event) {
    const { name } = event.target;
    this.validateField(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formFields = [
      "firstName", "lastName", "userName", "emailAddress", "password", 
      "passwordConfirmation", "phoneno", "country", "city", "panno", "aadharno"
    ];
    let isValid = true;

    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    this.setState({ isFormSubmitted: isValid });
  }

  validateField(name) {
    let isValid = false;
    switch(name) {
      case "firstName":
        isValid = this.validateFirstName();
        break;
      case "lastName":
        isValid = this.validateLastName();
        break;
      case "userName":
        isValid = this.validateUserName();
        break;
      case "emailAddress":
        isValid = this.validateEmailAddress();
        break;
      case "password":
        isValid = this.validatePassword();
        break;
      case "passwordConfirmation":
        isValid = this.validatePasswordConfirmation();
        break;
      case "phoneno":
        isValid = this.validatePhoneNo();
        break;
      case "country":
        isValid = this.validateCountry();
        break;
      case "city":
        isValid = this.validateCity();
        break;
      case "panno":
        isValid = this.validatePanNo();
        break;
      case "aadharno":
        isValid = this.validateAadharNo();
        break;
      default:
        break;
    }
    return isValid;
  }

  validateFirstName() {
    const { firstName } = this.state;
    const firstNameError = firstName.trim() === "" ? "First Name is required" : "";
    this.setState({ firstNameError });
    return firstNameError === "";
  }

  validateLastName() {
    const { lastName } = this.state;
    const lastNameError = lastName.trim() === "" ? "Last Name is required" : "";
    this.setState({ lastNameError });
    return lastNameError === "";
  }

  validateUserName() {
    const { userName } = this.state;
    const userNameError = userName.trim() === "" ? "Username is required" : "";
    this.setState({ userNameError });
    return userNameError === "";
  }

  validateEmailAddress() {
    const { emailAddress } = this.state;
    let emailAddressError = "";
    if (emailAddress.trim() === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(emailAddress)) emailAddressError = "Email is not valid";
    this.setState({ emailAddressError });
    return emailAddressError === "";
  }

  validatePassword() {
    const { password } = this.state;
    let passwordError = "";
    if (password.trim() === "") passwordError = "Password is required";
    else if (!passwordValidator.test(password))
      passwordError = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
    this.setState({ passwordError });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.state;
    const passwordConfirmationError = password !== passwordConfirmation ? "Password does not match Confirmation" : "";
    this.setState({ passwordConfirmationError });
    return passwordConfirmationError === "";
  }

  validatePhoneNo() {
    const { phoneno } = this.state;
    let phonenoError = "";
    if (phoneno.trim() === "") phonenoError = "Phone number is required";
    else if (!phoneValidator.test(phoneno)) phonenoError = "Phone number is not valid";
    this.setState({ phonenoError });
    return phonenoError === "";
  }

  validateCountry() {
    const { country } = this.state;
    const countryError = country.trim() === "" ? "Country is required" : "";
    this.setState({ countryError });
    return countryError === "";
  }

  validateCity() {
    const { city } = this.state;
    const cityError = city.trim() === "" ? "City is required" : "";
    this.setState({ cityError });
    return cityError === "";
  }

  validatePanNo() {
    const { panno } = this.state;
    let pannoError = "";
    if (panno.trim() === "") pannoError = "PAN number is required";
    else if (!panValidator.test(panno)) pannoError = "PAN number is not valid";
    this.setState({ pannoError });
    return pannoError === "";
  }

  validateAadharNo() {
    const { aadharno } = this.state;
    let aadharnoError = "";
    if (aadharno.trim() === "") aadharnoError = "Aadhar number is required";
    else if (!aadharValidator.test(aadharno)) aadharnoError = "Aadhar number is not valid";
    this.setState({ aadharnoError });
    return aadharnoError === "";
  }

  render() {
    const {
      firstName, lastName, userName, emailAddress, password, passwordConfirmation,
      phoneno, country, city, panno, aadharno,
      firstNameError, lastNameError, userNameError, emailAddressError,
      passwordError, passwordConfirmationError, phonenoError, countryError,
      cityError, pannoError, aadharnoError, isFormSubmitted
    } = this.state;

    return (
      <div className="main">
        <h2>SignUp Form Using React</h2>
        {isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {firstName}</div>
            <div>Last Name: {lastName}</div>
            <div>Username: {userName}</div>
            <div>Email Address: {emailAddress}</div>
            <div>Phone Number: {phoneno}</div>
            <div>Country: {country}</div>
            <div>City: {city}</div>
            <div>PAN Number: {panno}</div>
            <div>Aadhar Number: {aadharno}</div>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {firstNameError && <div className="errorMsg">{firstNameError}</div>}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {lastNameError && <div className="errorMsg">{lastNameError}</div>}
              <input
                type="text"
                placeholder="Username"
                name="userName"
                value={userName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {userNameError && <div className="errorMsg">{userNameError}</div>}
              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={emailAddress}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {emailAddressError && <div className="errorMsg">{emailAddressError}</div>}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {passwordError && <div className="errorMsg">{passwordError}</div>}
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                value={passwordConfirmation}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {passwordConfirmationError && <div className="errorMsg">{passwordConfirmationError}</div>}
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneno"
                value={phoneno}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {phonenoError && <div className="errorMsg">{phonenoError}</div>}
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {countryError && <div className="errorMsg">{countryError}</div>}
              <input
                type="text"
                placeholder="City"
                name="city"
                value={city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {cityError && <div className="errorMsg">{cityError}</div>}
              <input
                type="text"
                placeholder="PAN Number"
                name="panno"
                value={panno}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {pannoError && <div className="errorMsg">{pannoError}</div>}
              <input
                type="text"
                placeholder="Aadhar Number"
                name="aadharno"
                value={aadharno}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {aadharnoError && <div className="errorMsg">{aadharnoError}</div>}
              <button type="submit">Signup</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;
