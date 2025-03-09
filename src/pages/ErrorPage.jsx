import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-2">Kechirasiz, sahifa topilmadi.</p>
      <Link
        to="/"
        className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}
