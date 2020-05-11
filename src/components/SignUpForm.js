import React, { Component } from "react";
import "../css/SignUpForm.css";
import { Link } from "react-router-dom";
import ReactFormInputValidation from "react-form-input-validation";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        password: "",
      },
      errors: {}, //it will have errors if email or password invalid
      signup: "",
    };
    this.form = new ReactFormInputValidation(this);
    // Rules for validation of form by "ReactFormInputValidation" pacakge
    this.form.useRules({
      name: "required",
      email: "required|email",
      password: "required",
    });
    // On submit this action will take place
    this.form.onformsubmit = (fields) => {
      if (fields.password.length < 6) {
        this.setState({
          signup: "password must be equal to or greater than 6 characters",
        });
      } else {
        alert("Signed Up Successfully");
        this.setState({
          fields: {
            name: "",
            email: "",
            password: "",
          },
        });
      }
    };
  }

  render() {
    return (
      <div>
        <div className="signup-card">
          <div className="signup-form">
            <h2 className="signup-title">Sign-Up</h2>
            <form className="form" onSubmit={this.form.handleSubmit}>
              <div className="error-top-container">
                <span className="error-top">
                  {this.state.signup ? this.state.signup : ""}
                </span>
              </div>
              <label htmlFor="name" className="sign-up-field-labels">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter Full Name"
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.name}
              />
              <span className="error">
                {this.state.errors.name ? this.state.errors.name : ""}
              </span>
              <label htmlFor="email" className="sign-up-field-labels">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter Email"
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.email}
              />
              <span className="error">
                {this.state.errors.email ? this.state.errors.email : ""}
              </span>
              <label htmlFor="password" className="sign-up-field-labels">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                onBlur={this.form.handleBlurEvent}
                onChange={this.form.handleChangeEvent}
                value={this.state.fields.password}
              />
              <label className="error">
                {this.state.errors.password ? this.state.errors.password : ""}
              </label>
              <input type="submit" value="Sign-Up" className="sign-up-btn" />
            </form>
          </div>
          <div className="sign-in-for-sign-up">
            Already registered?
            <Link to="/" className="sign-in-link">
              &nbsp; Sign-In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
