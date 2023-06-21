import React, { useState } from "react";
import { Link } from "react-router-dom";
import ".//login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const storedUsersData = localStorage.getItem("userData");
    if (!storedUsersData) {
      setErrorMessage("No hay usuarios registrados");
      return;
    }

    const usersData = JSON.parse(storedUsersData);
    const user = usersData[email];

    if (!user) {
      setErrorMessage("No existe una cuenta asociada a ese correo electrónico");
      return;
    }

    if (user.password !== password) {
      setErrorMessage("La contraseña es incorrecta");
      return;
    }

    setErrorMessage("Sesión iniciada correctamente");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleFormSubmit} className="login-form">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <div className="login-button-container">
          <button type="submit" className="btn-login" id="log">
            Inicia sesión
          </button>
          <Link to="/sign-up" className="btn-login" id="log">
            ¿Estás empezando a usar Linkedin? Unirse ahora
          </Link>
        </div>

        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
