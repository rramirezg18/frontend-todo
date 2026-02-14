import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";


const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    setError(null);

    try {
      const response = await api.post("/auth/login", {
        Username: username,
        Password: password,
      });

      const data = response.data;

      login(data.token, data.role.name);
      navigate("/dashboard");

      setUsername('');
      setPassword('');

      console.log("Login exitoso:", data);
    } catch (err) {
      setError("Usuario o contraseña incorrectos");
      console.error(err);
    }

    //console.log('Hola')
    //console.log('username: ', username);
    //console.log('password: ', password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          id="username"
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Ingresa tu usuario"
          value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Ingresa tu contraseña"
          value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      {error && <p>{error}</p>}

      <button type="submit">Iniciar sesión</button>

    </form>
  );
};

export default Login;