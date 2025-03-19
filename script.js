// Open Popup
function openPopup(id) {
    document.getElementById(id).style.display = "flex";
}

// Close Popup
function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// Tab Switching Function
function showTab(tabId) {
    // Remove active class from all buttons and tabs
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Add active class to clicked tab
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}
