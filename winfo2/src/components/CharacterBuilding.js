\.character-building-container {
  /* Full-screen layout, center everything */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px; /* Increased space between containers */
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  font-family: 'Tiny5', sans-serif;
  background: linear-gradient(135deg, #78b3ff, #4a90e2); /* Gradient background */
  color: #333;
  padding: 30px; /* Increased padding for better spacing */
  margin: 0; /* Remove extra margin */
  box-sizing: border-box; /* Ensure padding is included in dimensions */
}

.avatar-container {
  /* Container for avatar preview and related information */
  background-color: #f9f9f9;
  border: 4px solid #78b3ff; /* Slightly thicker border */
  border-radius: 20px; /* Increased border radius */
  padding: 30px; /* Increased padding for better spacing */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Slightly larger shadow */
  text-align: center;
  height: auto; /* Allow height to adjust dynamically */
  width: 550px; /* Fixed width */
  display: flex;
  flex-direction: column; /* Vertical alignment inside container */
  justify-content: space-between; /* Align content vertically */
}

.avatar-preview {
  /* Style for the avatar preview inside the avatar container */
  width: 100%; /* Ensure the avatar uses the container width */
  max-width: 700px; /* Set a larger max-width */
  margin: 0 auto;
  text-align: center;
  transform: scale(1.1); /* Slightly scaled up for better visibility */
  margin-bottom: 40px; /* Added space below the avatar preview */
}

.avatar-header {
  /* Header for the avatar section */
  margin-bottom: 0px; /* Increased spacing below header */
  font-size: 50px; /* Increased font size */
  font-family: 'Tiny5', sans-serif;
  color: #196edd;
}

.wallet {
  /* Wallet title styling */
  font-size: 32px; /* Increased font size */
  font-weight: bold;
  color: #196edd;
  margin-top: 20px; /* Increased top margin */
}

.wallet-info {
  /* Wallet details section with flex alignment */
  font-size: 30px; /* Larger font size */
  font-weight: bold; /* Make it bold */
  color: #196edd; /* Match theme color */
  margin-top: 40px; /* Increased margin to add more space between wallet and avatar */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px; /* Increased spacing between emoji and text */
}

.wallet-info span {
  /* Style for the emoji in wallet info */
  font-size: 30px; /* Larger emoji */
}

.customization-panel {
  /* Container for customization options */
  background-color: #f9f9f9;
  padding: 30px; /* Increased padding for better spacing */
  border-radius: 20px; /* Increased border radius */
  border: 4px solid #78b3ff; /* Slightly thicker border */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Slightly larger shadow */
  width: 900px; /* Increased width */
  height: 830px; /* Increased height */
  overflow-y: auto; /* Allow scrolling if necessary */
}

.tabs {
  /* Style for tabs at the top of the customization panel */
  display: flex;
  gap: 10px; /* Increased spacing between buttons */
  margin-bottom: 20px;
  justify-content: center;
}

.tab-button {
  /* Styling for tab buttons */
  background: #fff;
  border: 3px solid #78b3ff; /* Slightly thicker border */
  padding: 15px 30px; /* Increased padding for a larger button */
  border-radius: 8px; /* Increased border radius */
  cursor: pointer;
  font-family: 'Tiny5', sans-serif;
  font-size: 18px; /* Slightly larger font size */
  font-weight: bold;
  transition: background 0.3s, color 0.3s;
}

.tab-button.active {
  /* Style for active tab button */
  background: #196edd;
  color: white;
}

.tab-button:hover {
  /* Hover effect for tab buttons */
  background: #78b3ff;
  color: #fff;
}

.tab-content {
  /* Content area for each tab */
  margin-top: 20px;
  height: 600px; /* Increased height to accommodate larger layout */
  overflow-y: auto; /* Allow scrolling for overflow content */
}

.tab-content h4 {
  /* Heading style for content inside tabs */
  font-family: 'Tiny5', sans-serif;
  font-size: 20px; /* Slightly larger font size */
  font-weight: bold;
  margin-bottom: 12px;
  margin-left: 40px; /* Keep left margin for alignment */
  color: #196edd;
}

.options-grid {
  /* Grid layout for customization options */
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Increased spacing between options */
  margin-left: 40px; /* Keep left margin for alignment */
  margin-bottom: 10px; /* Adjusted margin below */
  margin-top: 10px;
}

.option {
  /* Individual option card styling */
  width: 120px; /* Increased width for better visibility */
  height: 45px; /* Increased height */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the left */
  justify-content: center;
  padding: 15px; /* Increased padding for better spacing */
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 8px; /* Increased border radius */
  transition: border-color 0.3s;
  margin-bottom: 10px;
  text-align: center;
}

.option:hover {
  /* Hover effect for options */
  transform: scale(1.15); /* Slightly larger scale */
  border-color: #78b3ff;
}

.option.selected {
  /* Style for selected option */
  border-color: #196edd;
  background: #d9ebff;
}

.unlock-button {
  /* Unlock button styling */
  background: #78b3ff;
  color: white;
  border: none;
  padding: 8px 15px; /* Slightly larger padding */
  border-radius: 6px; /* Slightly larger border radius */
  cursor: pointer;
  font-size: 16px; /* Slightly larger font size */
  margin-top: 10px;
  font-weight: bold;
}

.unlock-button:hover {
  /* Hover effect for unlock button */
  background: #196edd;
}

.button-group {
  /* Container for the Reset and Save buttons */
  display: flex;
  justify-content: center; /* Center align the buttons */
  gap: 20px; /* Space between the buttons */
  margin-top: 20px; /* Add space above the button group */
  margin-bottom: 10px; /* Add space below for aesthetics */
}

.reset-button {
  /* Reset button styling */
  background: #196edd;
  color: white;
  border: none;
  padding: 12px 25px; /* Adjusted padding for consistency */
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  font-family: 'Tiny5', sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.reset-button:hover {
  /* Hover effect for Reset button */
  background: #78b3ff;
  transform: scale(1.05);
}

.save-avatar-button {
  /* Save Avatar button styling */
  background: #78b3ff;
  color: white;
  border: none;
  padding: 12px 25px; /* Adjusted padding for consistency */
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  font-family: 'Tiny5', sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.save-avatar-button:hover {
  /* Hover effect for Save Avatar button */
  background: #196edd;
  transform: scale(1.05);
}

