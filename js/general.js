document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    dateElement.textContent = new Date().toLocaleDateString('en-US', options);
});
