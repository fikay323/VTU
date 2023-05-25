import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    hasAgreed: false,
  });

  const [showRed, setShowRed] = useState(false);
  const [showAgree, setShowAgree] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, confirmPassword } = formData;
    if (password === confirmPassword && formData.hasAgreed) {
      setShowAgree(false);
      setShowRed(false);
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const ref = doc(db, "Users", user.uid)
          const docRef = setDoc(ref, {
            fullName: formData.fullName,
            userName: formData.userName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            password: formData.password,
          });
          Navigate("/login");
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
      try {
        await axios.post("http://localhost:4000/post_data", { formData });
      } catch (error) {
        console.log(error);
      }
    } else if (formData.password !== formData.confirmPassword) {
      setShowRed(true);
      setShowAgree(false);
    } else if (!formData.hasAgreed) {
      setShowRed(false);
      setShowAgree(true);
    }
  };

  return (
    <div className="body">
      <div className="SignUp-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={handleChange}
            required
          />

          <label htmlFor="">Username</label>
          <input
            type="text"
            id="fullName"
            name="userName"
            onChange={handleChange}
            required
          />

          <label htmlFor="">Email</label>
          <input
            type="text"
            id="fullName"
            name="email"
            onChange={handleChange}
            required
          />

          <label htmlFor="">Phone</label>
          <input
            type="text"
            id="fullName"
            name="phone"
            onChange={handleChange}
            required
          />

          <label htmlFor="">Address</label>
          <input
            type="text"
            id="fullName"
            name="address"
            onChange={handleChange}
            required
          />

          <label htmlFor="">Password</label>
          <input
            type="password"
            id="fullName"
            name="password"
            onChange={handleChange}
            required
          />

          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            id="fullName"
            name="confirmPassword"
            onChange={handleChange}
            required
            style={{ border: showRed ? "thin solid red" : "" }}
          />
          {showRed && (
            <small className="red">The two password fields do not match</small>
          )}

          <label htmlFor="">
            <input
              type="checkbox"
              id="checkbox"
              name="hasAgreed"
              checked={formData.hasAgreed}
              onChange={handleChange}
            />
            I agree to the terms and conditions.
          </label>
          {showAgree && (
            <small className="red">
              Pls agree to the terms and conditions before continuing
            </small>
          )}

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
