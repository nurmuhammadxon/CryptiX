import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url("/assets/login-background.jpg")` }}
    >
      <div className="w-[400px] bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Kirish</h2>
        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className="font-medium">Email</span>
            <input
              type="email"
              required
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-medium">Parol</span>
            <input
              type="password"
              required
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Kirish
          </button>
          <p className="text-center text-sm">
            Hisobingiz yo'qmi?
            <Link to="/register" className="text-blue-500 hover:underline"> Ro'yxatdan o'tish</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
