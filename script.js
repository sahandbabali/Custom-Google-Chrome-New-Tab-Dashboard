



// Function to update the clock, date, and day of the week display
function updateClockDateAndDay() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;

}

// Update the clock, date, and day of the week every second (1000 milliseconds)
setInterval(updateClockDateAndDay, 1000);

// Initial update to show the current time, date, and day of the week immediately
updateClockDateAndDay();



const now = new Date();
const month = (now.getMonth() + 1).toString().padStart(2, '0');
const day = now.getDate().toString().padStart(2, '0');
const year = now.getFullYear();
const dateString = `${month}/${day}/${year}`;
document.getElementById('date').textContent = dateString;

const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayIndex = now.getDay();
const dayString = dayOfWeek[dayIndex];
document.getElementById('day').textContent = dayString;


const date = new Date()
const option = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
}


document.getElementById('iranianDate').textContent = date.toLocaleDateString("fa-IR", option);







function performGoogleSearch() {
    const searchQuery = document.getElementById("searchInput").value;
    const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
    window.open(searchUrl, "_blank");

    // Clear the input field after search
    document.getElementById("searchInput").value = '';
}



document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    performGoogleSearch();
});



// Function to populate textarea with the value from local storage
function populateTextareaFromLocalStorage() {
    const textarea = document.getElementById('tempnotesarea');
    const tempNote = localStorage.getItem('tempnote');
    if (tempNote) {
        textarea.value = tempNote;
    }
}

// Call the function to populate the textarea on script start
populateTextareaFromLocalStorage();




// Add event listener to save textarea content to local storage on change
document.getElementById('tempnotesarea').addEventListener('change', (e) => {
    localStorage.setItem('tempnote', e.target.value);
});
