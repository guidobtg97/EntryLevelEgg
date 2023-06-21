import React, { useState } from "react";
import ".//registro.css";

const Registro = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleForm = (event) => {
    event.preventDefault();

    if (!isEmailValid(email)) {
      setErrorMessage("El correo electrónico no es válido.");
      return;
    }

    if (!isPasswordValid(password)) {
      setErrorMessage(
        "La contraseña no es válida. Debe tener al menos 8 caracteres."
      );
      return;
    }

    const storedUsersData = localStorage.getItem("userData");
    let usersData = {};

    if (storedUsersData) {
      usersData = JSON.parse(storedUsersData);
    }

    if (usersData[email]) {
      setErrorMessage("Ya existe una cuenta asociada a ese correo electrónico");
      return;
    }

    usersData[email] = {
      password: password.toString(),
      email,
    };

    localStorage.setItem("userData", JSON.stringify(usersData));

    setPassword("");
    setEmail("");
    setErrorMessage("");
    setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");
  };

  const isEmailValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  return (
    <div className="register-container">
      <form onSubmit={handleForm} className="register-form">
        <label htmlFor="email">Email</label>
        <input
          className="register-input"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="button-container">
          <button type="submit" className="btn-register">
            Registrarse
          </button>
        </div>

        {errorMessage && <p>{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Registro;
