import { useEffect, useState } from "react";

const API_BASE = "https://emirapp.pythonanywhere.com/api";

interface Medicine {
  id: number;
  name: string;
  strength: string;
  form: string;
  manufacturer?: string;
  is_active?: boolean;
  metadata?: Record<string, any>;
}

export default function MedicineDashboard() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/medicines/`)
      .then((res) => res.json())
      .then((data) => setMedicines(data.medicines || []));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Medicines</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Strength</th>
            <th className="border border-gray-300 px-4 py-2">Form</th>
            <th className="border border-gray-300 px-4 py-2">Manufacturer</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med) => (
            <tr key={med.id} className="border-t">
              <td className="border border-gray-300 px-4 py-2">{med.name}</td>
              <td className="border border-gray-300 px-4 py-2">{med.strength}</td>
              <td className="border border-gray-300 px-4 py-2">{med.form}</td>
              <td className="border border-gray-300 px-4 py-2">{med.manufacturer || "—"}</td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    med.is_active ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {med.is_active ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
