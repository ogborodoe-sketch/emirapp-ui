import { useEffect, useState } from "react";

export default function MedicineList() {
  const [medicines, setMedicines] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://emirapp.pythonanywhere.com/api/medicines/")
      .then(res => res.json())
      .then(data => setMedicines(data.medicines));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Medicines</h1>
      <ul className="space-y-2">
        {medicines.map(med => (
          <li key={med.id} className="border p-3 rounded">
            <strong>{med.name}</strong> — {med.strength} {med.form}
            {med.manufacturer && <span> (by {med.manufacturer})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
