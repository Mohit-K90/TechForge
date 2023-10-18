function calculateTotalCost() {
  // Define the prices for your components (in rupees).
  const componentPrices = {
    "Lian Li O11 Dynamic Mini": 10000,
    "Corsair 4000D Airflow": 8000,
    "Fractal Design Meshify 2 Compact": 9000,
    "Intel Core i5-13600K": 25000,
    "AMD Ryzen 5 7600X": 23000,
    "ASUS ROG Strix B660-A Gaming WiFi D4": 18000,
    "MSI B650 Tomahawk MAX WiFi": 16000,
    "Corsair Vengeance LPX 16GB (2x8GB) DDR4-3600": 6000,
    "G.Skill Trident Z Neo 32GB (2x16GB) DDR4-3200": 10000,
    "Samsung 970 EVO Plus 500GB NVMe M.2 SSD": 7000,
    "Western Digital Blue SN570 1TB NVMe M.2 SSD": 12000,
    "NVIDIA GeForce RTX 3060 Ti": 40000,
    "AMD Radeon RX 6600 XT": 35000,
    "Corsair RMx 650W 80+ Gold Fully Modular": 9000,
    "Seasonic Focus GX-650W 80+ Gold Fully Modular": 9500,
  };

  const selectedPartsList = document.getElementById('selectedPartsList');
  const totalCostTextBox = document.getElementById('totalCostTextBox');

  const listItems = selectedPartsList.getElementsByTagName('li');
  let totalCost = 0;

  for (const item of listItems) {
    const componentName = item.textContent.split(': ')[1];
    totalCost += componentPrices[componentName];
  }

  // Update the total cost in the text box with the rupees sign.
  totalCostTextBox.value = `Rs.${totalCost}`;
}
