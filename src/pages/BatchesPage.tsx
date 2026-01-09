import { useEffect, useState } from "react";

const API_BASE = "https://emirapp.pythonanywhere.com/api";

interface Batch {
  id: string;
  externalid: string;
  medicine: string;
  quantity: number;
  unit: string;
  status: string;
  supplier: string;
}

export default function BatchesPage() {
  const [batches, setBatches] = useState<Batch[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/batches/`)
      .then((res) => res.json())
      .then((data) => setBatches(data.batches || []));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Batches</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {batches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              Batch {batch.externalid}
            </h3>
            <p className="text-gray-600">Medicine: {batch.medicine}</p>
            <p className="text-gray-600">
              Quantity: {batch.quantity} {batch.unit}
            </p>
            <p className="text-gray-600">Status: {batch.status}</p>
            <p className="text-gray-600">Supplier: {batch.supplier}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
