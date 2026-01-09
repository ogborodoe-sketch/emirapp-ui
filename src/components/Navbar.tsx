import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex space-x-6 shadow-md">
      <Link to="/" className="hover:text-blue-400 font-semibold">Home</Link>
      <Link to="/medicines" className="hover:text-blue-400 font-semibold">Medicines</Link>
      <Link to="/batches" className="hover:text-blue-400 font-semibold">Batches</Link>
      <Link to="/shipments" className="hover:text-blue-400 font-semibold">Shipments</Link>
    </nav>
  );
}
