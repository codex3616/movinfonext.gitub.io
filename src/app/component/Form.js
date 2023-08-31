"use client";
import contactStyles from "@/app/styles/contact.module.css";
import homeStyles from "@/app/styles/home.module.css";
import { useState } from "react";
const Form = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({
          userName: user.userName,
          email: user.email,
          phone: user.phone,
          message: user.message,
        }),
      });

      if (response.status === 200) {
        setUser({
          userName: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("success");
      } else {
        setStatus("success");
      }
    } catch (e) {
      console.log(`post error : ${e}`);
    }
  };

  return (
    <>
      <form action="" className={contactStyles.form} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            value={user.userName}
            required
            onChange={handleChange}
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            required
            onChange={handleChange}
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label for="phoneNo" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            required
            onChange={handleChange}
            className="form-control"
            id="phoneNo"
          />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            placeholder="Enter Your Message..."
            name="message"
            value={user.message}
            required
            onChange={handleChange}
          ></textarea>
        </div>
        {status === "success" && (
          <p className={contactStyles.success}>Thank you for your message</p>
        )}
        {status === "error" && (
          <p className={contactStyles.error}>
            There is an error while submitting message.. please try again
          </p>
        )}
        <button type="submit" className={homeStyles.btn}>
          Submit Message
        </button>
      </form>
    </>
  );
};

export default Form;
