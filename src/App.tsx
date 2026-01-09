import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BatchesPage from "./pages/BatchesPage";
import BatchDetail from "./pages/BatchDetail";
import MedicinesPage from "./pages/MedicinesPage";
import ShipmentsPage from "./pages/ShipmentsPage";
import ShipmentDetail from "./pages/ShipmentDetail";

function LandingPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to EmirApp</h1>
      <p className="text-lg text-gray-600 mb-6">
        Manage your medicine batches, shipments, and medicines easily.
      </p>
      <nav className="space-x-6">
        <Link to="/batches" className="text-blue-600 hover:underline">Batches</Link>
        <Link to="/shipments" className="text-blue-600 hover:underline">Shipments</Link>
        <Link to="/medicines" className="text-blue-600 hover:underline">Medicines</Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/batches" element={<BatchesPage />} />
        <Route path="/batches/:batchId" element={<BatchDetail />} />
        <Route path="/medicines" element={<MedicinesPage />} />
        <Route path="/shipments" element={<ShipmentsPage />} />
        <Route path="/shipments/:shipmentId" element={<ShipmentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
