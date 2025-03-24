function showPopup() {
    document.getElementById('confirmationPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}

function confirmAction() {
    // Add your confirmation logic here
    alert('Action confirmed!');
    closePopup();
}

// Close popup when clicking outside
window.onclick = function(event) {
    const popup = document.getElementById('confirmationPopup');
    if (event.target == popup) {
        closePopup();
    }
}
