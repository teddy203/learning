// Create an array of event objects
const events = [
    {
      title: "Conference",
      date: new Date("2024-09-01"),
      location: "New York",
      attendees: new Set(["Alice", "Bob"]),
    },
    {
      title: "Workshop",
      date: new Date("2024-08-30"),
      location: "San Francisco",
      attendees: new Set(["John", "Jane"]),
    },
    {
      title: "Meetup",
      date: new Date("2024-09-05"),
      location: "Los Angeles",
      attendees: new Set(["Mary"]),
    },
  ];
  
  // Function to display events happening in the next 7 days
  const next7DaysEvents = events
    .filter(event => {
      const today = new Date();
      const sevenDaysFromNow = new Date();
      sevenDaysFromNow.setDate(today.getDate() + 7);
      return event.date >= today && event.date <= sevenDaysFromNow;
    })
    .map(({ title, date, location }) => ({ title, date, location }));
  
  console.log("Events happening in the next 7 days:", next7DaysEvents);
  
  // Create a WeakMap to store the event organizer
  const organizers = new WeakMap();
  organizers.set(events[0], "Michael");
  organizers.set(events[1], "Sarah");
  organizers.set(events[2], "David");
  
  // Destructure properties and display them in a table format
  next7DaysEvents.forEach(({ title, date, location }) => {
    console.table({ title, date, location });
  });
  
  // Function to add a new attendee to an event
  function addAttendee(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
      console.log(`${attendeeName} added to ${eventTitle}`);
    } else {
      console.log(`Event with title ${eventTitle} not found.`);
    }
  }
  
  // Adding an attendee
  addAttendee("Conference", "Tom");
  
  // Function to convert the event array to a JSON string
  function eventsToJSONString(eventsArray) {
    // Custom toJSON method to add formattedDate
    eventsArray.forEach(event => {
      event.toJSON = function () {
        const formattedDate = this.date.toLocaleDateString("en-US");
        return { ...this, formattedDate };
      };
    });
  
    return JSON.stringify(eventsArray, null, 2);
  }
  
  // Convert to JSON string
  const jsonString = eventsToJSONString(events);
  console.log("Events JSON string:", jsonString);
  
  // Display properties and values of the first event
  const firstEvent = events[0];
  console.log("Keys:", Object.keys(firstEvent));
  console.log("Values:", Object.values(firstEvent));
  console.log("Entries:", Object.entries(firstEvent));
  
  // Iterate over the events and log title and date
  events.forEach(event => {
    console.log(`Title: ${event.title}, Date: ${event.date.toLocaleDateString()}`);
  });
  
  // Bonus: Functionality to delete an event
  function deleteEvent(eventTitle) {
    const index = events.findIndex(event => event.title === eventTitle);
    if (index !== -1) {
      events.splice(index, 1);
      console.log(`Event '${eventTitle}' deleted.`);
    } else {
      console.log(`Event with title '${eventTitle}' not found.`);
    }
  }
  
  // Deleting an event
  deleteEvent("Workshop");
  
  // Bonus: Find the event with the most attendees
  const eventWithMostAttendees = events.reduce((maxEvent, currentEvent) => {
    return currentEvent.attendees.size > maxEvent.attendees.size ? currentEvent : maxEvent;
  }, events[0]);
  
  console.log("Event with most attendees:", eventWithMostAttendees);
  