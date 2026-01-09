import { useEffect, useState } from "react";

export default function MedicinesPage() {
  const [medicines, setMedicines] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://emirapp.pythonanywhere.com/api/medicines/")
      .then(res => res.json())
      .then(data => setMedicines(data.medicines));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Medicines</h1>
      {medicines.length === 0 ? (
        <p className="text-gray-600">No medicines found.</p>
      ) : (
        <ul className="space-y-3">
          {medicines.map(med => (
            <li key={med.id} className="border p-3 rounded">
              <div className="font-semibold">{med.name}</div>
              <div>Strength: {med.strength}</div>
              <div>Form: {med.form}</div>
              {med.manufacturer && <div>Manufacturer: {med.manufacturer}</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
