import { useState } from "react";
import "./estilo.css";

function FormInput() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, senha);
    try {
      const usuario = { email:email, senha:senha};
      console.log(usuario);
      const response = await fetch("http://localhost:5000/telaprincipal/", {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, /',
          'Content-Type': 'application/json'
        },
        // headers: { "Contet-Type": "application/json" },
        body: JSON.stringify(usuario),
      });
      console.log(usuario)
      console.log(await response);
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="formularioContainer">
      <div className="inputContainer">
        <div className="logo">
          <h3>
            <b>TR</b>sistem
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">E-mail</label>
          <input
            type="text"
            name="email"
            placeholder="E-mail do usuario"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label htmlFor="senha">Senha</label>
          <input
            className="senha"
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
          ></input>
          <div className="btn">
            <button type="submit"> Entrar</button>
          </div>
        </form>
        <a href="#">Esqueceu a senha</a>
      </div>
    </div>
  );
}

export default FormInput;
