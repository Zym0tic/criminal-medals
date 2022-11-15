import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

const Signup = () => {
  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
          <div className="form-group col-md-12 col-lg-6">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control"
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-12 col-lg-6">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className="form-control"
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
        </div>

          <div className="form-group col-md-12 col-lg-6">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              placeholder="youremail@email.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-12 col-lg-6">
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-control"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
        <div className="flex-row flex-start">
          <button className="btn btn-outline-dark btn-lg" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
