import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  //para que valide que es formato correo electronico
  const validarEmail = /\S+@\S+\.\S+/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.nombre.length >= 5 && validarEmail.test(user.email)) {
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        <label>Email: </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <button className="submit">Enviar</button>
      </form>

      {error ? "Por favor verifique su información nuevamente" : null}
      {show ? (
        <h3>
          Thanks {user.nombre} we will contact you as soon as possible via
          email.
        </h3>
      ) : null}
    </div>
  );
};

export default Form;
