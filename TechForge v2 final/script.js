// Create an object to store the selected components.
const selectedComponents = {
  "Case": [],
  "CPU": [],
  "Motherboard": [],
  "Memory": [],
  "Storage": [],
  "Video Card": [],
  "Power Supply": [],
};

// Create an object to store the prices of the components.
const componentPrices = {
  "Case": {
    "Lian Li O11 Dynamic Mini": 150,
    "Corsair 4000D Airflow": 100,
    "Fractal Design Meshify 2 Compact": 120,
  },
  "CPU": {
    "Intel Core i5-13600K": 300,
    "AMD Ryzen 5 7600X": 250,
  },
  "Motherboard": {
    "ASUS ROG Strix B660-A Gaming WiFi D4": 200,
    "MSI B650 Tomahawk MAX WiFi": 150,
  },
  "Memory": {
    "Corsair Vengeance LPX 16GB (2x8GB) DDR4-3600": 100,
    "G.Skill Trident Z Neo 32GB (2x16GB) DDR4-3200": 150,
  },
  "Storage": {
    "Samsung 970 EVO Plus 500GB NVMe M.2 SSD": 50,
    "Western Digital Blue SN570 1TB NVMe M.2 SSD": 75,
  },
  "Video Card": {
    "NVIDIA GeForce RTX 3060 Ti": 400,
    "AMD Radeon RX 6600 XT": 350,
  },
  "Power Supply": {
    "Corsair RMx 650W 80+ Gold Fully Modular": 100,
    "Seasonic Focus GX-650W 80+ Gold Fully Modular": 125,
  },
};

// Function to update the selected parts list and total cost.
function updateSelectedPartsList() {
  const selectedPartsList = document.getElementById('selectedPartsList');
  const totalCostTextBox = document.getElementById('totalCostTextBox');

  // Initialize total cost.
  let totalCost = 0;

  // Create an array to store selected components.
  const selectedComponentsList = [];

  for (const componentType in selectedComponents) {
    for (const componentName of selectedComponents[componentType]) {
      selectedComponentsList.push(`${componentType}: ${componentName}`);
      totalCost += componentPrices[componentType][componentName];
    }
  }

  // Update the selected parts list and total cost.
  selectedPartsList.innerHTML = selectedComponentsList.map(item => `<li>${item}</li>`).join('');
  totalCostTextBox.value = `$${totalCost}`;
}

// Call the initial update to set the total cost to 0.
updateSelectedPartsList();
