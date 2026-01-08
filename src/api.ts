const API_URL = "https://Emir.pythonanywhere.com/api";

export async function fetchBatches() {
  const response = await fetch(`${API_URL}/batches/`);
  return response.json();
}

export async function fetchShipments() {
  const response = await fetch(`${API_URL}/shipments/`);
  return response.json();
}

export async function fetchMedicines() {
  const response = await fetch(`${API_URL}/medicines/`);
  return response.json();
}
