function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("-translate-x-full");
}

// Toggle Profile Dropdown
function toggleProfileDropdown() {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.classList.toggle("hidden");
}

// Toggle Search Input Field
function toggleSearchInput() {
  const searchDropdown = document.getElementById("searchDropdown");
  searchDropdown.classList.toggle("hidden");
}

// Close dropdowns when clicking outside
window.addEventListener("click", function (event) {
  const profileDropdown = document.getElementById("profileDropdown");
  const searchDropdown = document.getElementById("searchDropdown");

  if (
    !event.target.closest("#profileDropdown") &&
    !event.target.closest('[onclick="toggleProfileDropdown()"]')
  ) {
    profileDropdown.classList.add("hidden");
  }
  if (
    !event.target.closest("#searchDropdown") &&
    !event.target.closest('[onclick="toggleSearchInput()"]')
  ) {
    searchDropdown.classList.add("hidden");
  }
});
// Check the current URL and set active class based on the page
document.addEventListener("DOMContentLoaded", function () {
  // Get the current file name (like 'dashboard.php' or 'inventory.php')
  const currentPage = window.location.pathname.split("/").pop();

  // Map page names to their respective link IDs
  const pageToLinkIdMap = {
    "index.html": "home-link",
    "inventory.html": "inventory-link",
    "settings.php": "settings-link",
  };

  // Get the corresponding link ID for the current page
  const activeLinkId = pageToLinkIdMap[currentPage];

  // Add the 'active' class if a matching ID is found
  if (activeLinkId) {
    document.getElementById(activeLinkId).classList.add("active");
  }
});
