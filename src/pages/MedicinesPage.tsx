import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const API_BASE = "https://emirapp.pythonanywhere.com/api";

interface Medicine {
  id: number;
  name: string;
  strength: string;
  form: string;
  manufacturer?: string;
}

export default function MedicinesPage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/medicines/`)
      .then((res) => res.json())
      .then((data) => setMedicines(data.medicines || []));
  }, []);

  return (
    <div className="p-8">
      {/* Header with action button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Medicines</h2>
        <Link
          to="/medicines/create"
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          Add Medicine
        </Link>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {medicines.map((med) => (
          <div
            key={med.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{med.name}</h3>
            <p className="text-gray-600">Strength: {med.strength}</p>
            <p className="text-gray-600">Form: {med.form}</p>
            <p className="text-gray-600">
              Manufacturer: {med.manufacturer || "—"}
            </p>
            <div className="mt-4 flex space-x-3">
              <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
                View
              </button>
              <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
