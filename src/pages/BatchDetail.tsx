import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BatchDetail() {
  const { batchId } = useParams();
  const [batch, setBatch] = useState<any>(null);

  useEffect(() => {
    fetch(`https://emirapp.pythonanywhere.com/api/batches/${batchId}/`)
      .then(res => res.json())
      .then(data => setBatch(data));
  }, [batchId]);

  if (!batch) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Batch {batch.batch.external_id}</h1>
      <p>Medicine: {batch.batch.medicine}</p>
      <p>Status: {batch.batch.status}</p>
      <p>Supplier: {batch.batch.supplier}</p>

      <h2 className="text-xl font-semibold mt-6">Events</h2>
      <ul className="space-y-2">
        {batch.events.map((e: any) => (
          <li key={e.id} className="border p-2 rounded">
            {e.event_type} by {e.actor} — {e.notes}
          </li>
        ))}
      </ul>
    </div>
  );
}
