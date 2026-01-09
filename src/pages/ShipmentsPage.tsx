import { useEffect, useState } from "react";

const API_BASE = "https://emirapp.pythonanywhere.com/api";

interface Shipment {
  id: string;
  trackingcode: string;
  from: string;
  to: string;
  status: string;
}

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState<Shipment[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/shipments/`)
      .then((res) => res.json())
      .then((data) => setShipments(data.shipments || []));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Shipments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shipments.map((ship) => (
          <div
            key={ship.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Tracking: {ship.trackingcode}
            </h3>
            <p className="text-gray-600">From: {ship.from}</p>
            <p className="text-gray-600">To: {ship.to}</p>
            <p className="text-gray-600">Status: {ship.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
