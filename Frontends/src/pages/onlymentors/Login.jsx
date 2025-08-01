import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { name });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert("Access Denied");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0c2a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1b1c3a",
          padding: "40px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#fff", marginBottom: "20px" }}>
          Enter Your Full Name
        </h2>
        <input
          type="text"
          placeholder=" without space"
          onChange={(e) => setName(e.target.value.toLowerCase())}
          style={{
            padding: "10px",
            width: "100%",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "#E50914",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
