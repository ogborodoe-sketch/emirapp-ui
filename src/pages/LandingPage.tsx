import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="p-12 text-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to EmirApp</h1>
      <p className="text-lg text-gray-700 mb-10">
        Manage medicines, batches, and shipments with a modern, easy-to-use dashboard.
      </p>

      <div className="flex justify-center space-x-6">
        <Link
          to="/medicines"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Medicines
        </Link>
        <Link
          to="/batches"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          View Batches
        </Link>
        <Link
          to="/shipments"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
        >
          View Shipments
        </Link>
      </div>
    </div>
  );
}
