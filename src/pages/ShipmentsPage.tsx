import { useEffect, useState } from "react";

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://emirapp.pythonanywhere.com/api/shipments/")
      .then(res => res.json())
      .then(data => setShipments(data.shipments));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shipments</h1>
      {shipments.length === 0 ? (
        <p className="text-gray-600">No shipments found.</p>
      ) : (
        <ul className="space-y-3">
          {shipments.map(ship => (
            <li key={ship.id} className="border p-3 rounded">
              <div className="font-semibold">Tracking: {ship.tracking_code}</div>
              <div>From: {ship.from}</div>
              <div>To: {ship.to}</div>
              <div>Status: {ship.status}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
