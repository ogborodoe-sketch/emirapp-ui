import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchBatches } from "./api";

// Landing Page
function LandingPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Emir App</h1>
      <p className="text-lg text-gray-600 mb-6">
        Manage your medicine batches, shipments, and services all in one place.
      </p>
      <nav className="space-x-6">
        <Link to="/batches" className="text-blue-600 hover:underline">View Batches</Link>
        <Link to="/shipments" className="text-blue-600 hover:underline">View Shipments</Link>
        <Link to="/medicines" className="text-blue-600 hover:underline">View Medicines</Link>
      </nav>
    </div>
  );
}

// Batches Page
function BatchesPage() {
  const [batches, setBatches] = useState<any[]>([]);

  useEffect(() => {
    fetchBatches().then(data => setBatches(data.batches));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Medicine Batches</h1>
      {batches.length === 0 ? (
        <p className="text-gray-600">No batches found.</p>
      ) : (
        <ul className="space-y-3">
          {batches.map(batch => (
            <li key={batch.id} className="border p-3 rounded shadow-sm">
              <div className="font-semibold">{batch.external_id}</div>
              <div>Medicine: {batch.medicine}</div>
              <div>Status: {batch.status}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// App Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/batches" element={<BatchesPage />} />
        {/* Later add ShipmentsPage and MedicinesPage */}
      </Routes>
    </Router>
  );
}

export default App;
