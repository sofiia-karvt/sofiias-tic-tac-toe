"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("default"); // "default" | "typing" | "error" | "success"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check credentials
    if (email === "123@gmail.com" && password === "123") {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);

      if (status === "default") {
        setStatus("typing");
      }
    };

  // Determine dynamic content based on state
  const logoSrc =
    status === "error"
      ? "/incorrect_login_color_wheel.png"
      : status === "success"
      ? "/correct_login_color_wheel.png"
      : "/default_color_wheel.png";

  const titleText =
    status === "error"
      ? "THE PASSWORD YOU ENTERED IS INCORRECT.\nTRY AGAIN"
      : status === "success"
      ? "LOGIN SUCCESSFUL\n LETS GO!"
      : "PAINTING SERVICES >\n STUDENTS FOR STUDENTS";

  const titleColor =
    status === "error"
      ? "rgb(254, 79, 76)" // Red color for error state
      : status === "success"
      ? "rgb(6, 104, 107)" // Green color for success state
      : "rgb(254, 119, 214)"; // Pink for default state

  const buttonColor =
    status === "success"
      ? "rgb(6, 104, 107)" // Green when successful
      : "rgb(254, 119, 214)"; // Pink in all other states

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src={logoSrc} alt="Color Wheel Logo" className={styles.logo} />
        </div>

        {/* Title */}
        <div className={styles.title}>
          <h1 className={styles.mainTitle}>COLOR WHEEL</h1>
          <p className={styles.infoText} style={{ color: titleColor }}>
            {titleText}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              type="email"
              className={styles.input}
              placeholder="EMAIL >"
              value={email}
              onChange={handleInputChange(setEmail)}
              required
            />
          </div>

          <div className={styles.inputContainer}>
            <input
              type="password"
              className={`${styles.input} ${
                status === "error" ? styles.inputError : ""
              }`}
              placeholder="PASSWORD >"
              value={password}
              onChange={handleInputChange(setPassword)}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.button}
            style={{ backgroundColor: buttonColor }}
          >
            <span style={{ color: "black" }}>
              {status === "success" ? "✔" : "LOGIN"}
            </span>
          </button>
        </form>
        {/* Forgot Password */}
        <div className={styles.forgotPassword}>
          <a href="/forgot-password">FORGOT PASSWORD?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
