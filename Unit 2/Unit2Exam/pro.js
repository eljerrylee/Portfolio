class Event {
    constructor(eventName, date, time, location) {
        this.eventName = eventName;
        this.date = date;
        this.time = time;
        this.location = location;
    }

    displayDetail() {
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

const myEvent = new Event('Birthday Party', '2024-03-20', '5:00 PM', '124 Luke St.');

document.getElementById('viewEventButton').addEventListener('click', function() {
    myEvent.displayDetail();
});
