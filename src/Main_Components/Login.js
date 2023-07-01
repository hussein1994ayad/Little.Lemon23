import React from "react";
import "./login.css"

export default function Login() {
    return (
      <div className="Auth-form-container ">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group em">
              <label>Email address</label>
              <input
                type="email"
                className="form-control "
                placeholder="Enter email"
              />
            </div>
            <div className="form-group pa">
              <label>Password</label>
              <input
                type="password"
                className="form-control "
                placeholder="Enter password"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
            <p className="form-group-pass">
              Forgot <a href="/">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
  