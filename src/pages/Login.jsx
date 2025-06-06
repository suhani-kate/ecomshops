import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

const savedUser = JSON.parse(localStorage.getItem("myshop"));

if (
  savedUser &&
  savedUser.email === form.email &&
  savedUser.password === form.password
) {
  // Save login session separately
  localStorage.setItem("ecom-authenticated", JSON.stringify(savedUser));
  login(savedUser); // context update
  alert("Login successful!");
  navigate("/");
} else {
  alert("Invalid credentials");
}




  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
