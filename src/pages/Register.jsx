import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

const API_URL = "http://localhost:5000";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { postData } = useFetch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postData(`${API_URL}/register`, formData);
    if (response.success) {
      setMessage("Ro'yxatdan o'tish muvaffaqiyatli!");
      setTimeout(() => navigate("/login"), 2000);
    } else {
      setMessage(response.message || "Xatolik yuz berdi");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/login-background.jpg")` }}>
      <div className="w-full h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url("/assets/register-background.jpg")` }}>
        <div className="w-[400px] bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Ro'yxatdan o'tish</h2>
          {message && <p className="text-center text-red-500">{message}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="font-medium">Ism</span>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-medium">Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
            <label className="flex flex-col gap-1">
              <span className="font-medium">Parol</span>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </label>
            <button type="submit" className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition">Ro'yxatdan o'tish</button>
            <p className="text-center text-sm">
              Allaqachon hisobingiz bormi?
              <Link to="/login" className="text-blue-500 hover:underline"> Kirish</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
