import { useEffect, useState } from "react";

export default function BatchesPage() {
  const [batches, setBatches] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://emirapp.pythonanywhere.com/api/batches/")
      .then(res => res.json())
      .then(data => setBatches(data.batches));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Medicine Batches</h1>
      {batches.length === 0 ? (
        <p className="text-gray-600">No batches found.</p>
      ) : (
        <ul className="space-y-3">
          {batches.map(batch => (
            <li key={batch.id} className="border p-3 rounded">
              <div className="font-semibold">Batch ID: {batch.external_id}</div>
              <div>Medicine: {batch.medicine}</div>
              <div>Status: {batch.status}</div>
              <div>Supplier: {batch.supplier}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
