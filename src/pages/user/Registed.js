import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  registrationStart,
  registrationSuccess,
  registrationFailure,
} from "../../redux/registrationSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Registed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate
  const registrationState = useSelector((state) => state.registration);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({}); // Add state for errors

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear errors
    dispatch(registerUser(formData));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (data) => {
    
if (registrationState.success) {
    toast.success('Registration successful!');
  }
  
  if (registrationState.error) {
    toast.error(`Error: ${registrationState.error}`);
  }
    const errors = {};

    if (!data.firstName) {
      errors.firstName = "First name is required";
    }
  
    if (!data.lastName) {
      errors.lastName = "Last name is required";
    }
  
    if (!data.userName) {
      errors.userName = "User name is required";
    }
  
    if (!data.password) {
      errors.password = "Password is required";
    }
  
  
    return errors;
  };
  useEffect(() => {
    if (registrationState.success) {
      toast.success('Registration successful!');
      navigate("/login"); // Navigate to the login page
    }

    if (registrationState.error) {
      toast.error(`Error: ${registrationState.error}`);
    }
  }, [registrationState.success, registrationState.error, navigate]);
  return (

    <>
   {/* <Header2/> */}

      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-10 col-xl-10 col-lg-12 col-sm-12 mx-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To Fastkart</h3>
                  <h4>Create New Account</h4>
                </div>
                <div className="input-box">
                <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        {errors.userName && <p>{errors.userName}</p>}
      </div>
      {/* <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div> */}
      {/* <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="phoneNumber"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
      </div> */}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      {/* <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div> */}
      {/* Repeat similar blocks for other fields */}
      <button type="submit">Register</button>

      {registrationState.loading && <p>Loading...</p>}
      {registrationState.error && <p>Error: {registrationState.error}</p>}
      {registrationState.success && <p>Registration successful!</p>}
    </form>
                </div>
                <div className="other-log-in">
                  <h6>or</h6>
                </div>
                <div className="log-in-button">
                  <ul>
                    <li>
                      <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="btn google-button w-100">
                        <img src="../assets/images/inner-page/google.png" className="blur-up lazyloaded" alt="" />
                        Sign up with Google
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" className="btn google-button w-100">
                        <img src="../assets/images/inner-page/facebook.png" className="blur-up lazyloaded" alt="" /> Sign up with Facebook
                      </a>
                    </li>
                    <li>
                    <div className="sign-up-box">
                  <h4>Already have an account?</h4>
                  <a href="/login">Log In</a>
                </div>
                    </li>
                  </ul>
                </div>
               
                
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6" />
          </div>
        </div>
      </section>
      {/* <Footer2/> */}
      <ToastContainer position="top-center" />
    </>
  )
}

export default Registed
