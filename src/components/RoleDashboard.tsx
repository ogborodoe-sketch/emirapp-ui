type RoleProps = {
  role: "Supplier" | "Manufacturer" | "Distributor" | "Retailer";
};

export default function RoleDashboard({ role }: RoleProps) {
  const handleAction = async (action: string) => {
    if (action === "Create Batch") {
      try {
        const response = await fetch("http://localhost:5000/api/batch/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            supplierId: "SUP123",
            medicineName: "Paracetamol",
            quantity: 100,
          }),
        });
        const data = await response.json();
        alert(data.message);
      } catch (error) {
        alert("Error creating batch");
      }
    } else {
      alert(`${role} triggered action: ${action}`);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-gray-800">{role} Dashboard</h2>
      <p className="text-gray-600 mb-4">Actions available for {role}</p>

      {role === "Supplier" && (
        <button
          onClick={() => handleAction("Create Batch")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Batch
        </button>
      )}

      {role === "Manufacturer" && (
        <button
          onClick={() => handleAction("Process Batch")}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Process Batch
        </button>
      )}

      {role === "Distributor" && (
        <button
          onClick={() => handleAction("Ship Batch")}
          className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Ship Batch
        </button>
      )}

      {role === "Retailer" && (
        <button
          onClick={() => handleAction("Receive Batch")}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Receive Batch
        </button>
      )}
    </div>
  );
}
