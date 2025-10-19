import { useState,useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Login() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleLogin = async(e) => {
       e.preventDefault();
   const data= axios.post('http://localhost:8000/api/login',{
      email,
      password  
    }).then(res=>{
      login(data.token); // Assuming login sets context
      alert("Signup Successful");
      navigate('/login');
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-100 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-sky-600">🌿 Welcome Back</h1>
          <p className="text-gray-500 text-sm">Log in to continue your calm journey on <span className="font-semibold">Manah</span></p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded transition duration-300"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-sm text-gray-500">
          Don’t have an account? <a href="/signup" className="text-sky-600 font-medium hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
