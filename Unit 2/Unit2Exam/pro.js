
// Define a class representing an event with properties like event name, date, time, and location
class Event {
    constructor(eventName, date, time, location) {
        this.eventName = eventName;
        this.date = date;
        this.time = time;
        this.location = location;
    }

    // Method to display event details
    displayDetail() {
        // Log event details to console
        console.log(`Event: ${this.eventName}`);
        console.log(`Date: ${this.date}`);
        console.log(`Time: ${this.time}`);
        console.log(`Location: ${this.location}`);

        // Display details on HTML page
        document.getElementById('eventName').innerText = this.eventName;
        document.getElementById('eventDate').innerText = this.date;
        document.getElementById('eventTime').innerText = this.time;
        document.getElementById('eventLocation').innerText = this.location;
    }
}

// Create an instance of Event representing a specific event for birthday party
const myEvent = new Event('Birthday Party', '2024-03-20', '5:00 PM', '124 Luke St.');

// Add an event listener to a button with ID viewEventButton
document.getElementById('viewEventButton').addEventListener('click', function() {
    // When button is clicked, call displayDetail() method of myEvent to display event details 
    myEvent.displayDetail();
});
