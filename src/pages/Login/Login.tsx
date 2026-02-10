import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }

    setError(null);

    console.log('username: ', username);
    console.log('password: ', password)
  }
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