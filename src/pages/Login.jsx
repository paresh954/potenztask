import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/users");
      console.log(res.data.users);
      const user = res.data.users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        login(user);
        navigate("/profile");
      } else {
        setError("invalid credentials");
      }
    } catch (error) {
      console.log(error);
      setError("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white flex flex-col justify-center items-center h-screen font-mono">
      <div className="shadow-md border border-[#0abcf9] shadow-[#0abcf99e] flex flex-col justify-center items-center gap-5 p-5 h-[300px] w-[400px]">
        <h2 className="text-3xl font-bold ">Login</h2>
        <input
          className="w-[350px] text-black outline-none rounded-sm p-1"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          required
        />

        <input
          className="w-[350px] text-black outline-none rounded-sm p-1"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setError("");
            setPassword(e.target.value);
          }}
          required
        />

        <button
          disabled={loading}
          onClick={handleLogin}
          className="border-2 py-1 px-4 rounded-md bg-[#0abcf9] border-transparent shadow-lg shadow-[#0abcf99e] w-[160px] text-xl"
        >
          {loading ? "Logining..." : "Login"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
