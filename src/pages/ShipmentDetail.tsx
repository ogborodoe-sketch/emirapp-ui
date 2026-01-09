import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShipmentDetail() {
  const { shipmentId } = useParams();
  const [shipment, setShipment] = useState<any>(null);

  useEffect(() => {
    fetch(`https://emirapp.pythonanywhere.com/api/shipments/${shipmentId}/`)
      .then(res => res.json())
      .then(data => setShipment(data));
  }, [shipmentId]);

  if (!shipment) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shipment {shipment.shipment.tracking_code}</h1>
      <p>From: {shipment.shipment.from}</p>
      <p>To: {shipment.shipment.to}</p>
      <p>Status: {shipment.shipment.status}</p>

      <h2 className="text-xl font-semibold mt-6">Checkpoints</h2>
      <ul className="space-y-2">
        {shipment.checkpoints.map((c: any) => (
          <li key={c.id} className="border p-2 rounded">
            {c.status} — {c.location} ({c.timestamp})
          </li>
        ))}
      </ul>
    </div>
  );
}
