function showSection(action) {
  const content = document.getElementById("content");
  let formHTML = "";

  switch (action) {
    case "dashboard":
      formHTML = `
        <div class="cards">
          <div class="card">
            <h3>Flights</h3>
            <p id="flightCount">120</p>
          </div>
          <div class="card">
            <h3>Bookings</h3>
            <p id="bookingCount">450</p>
          </div>
          <div class="card">
            <h3>Schedules</h3>
            <p id="scheduleCount">78</p>
          </div>
        </div>
        <p style="text-align:center;">Welcome back, Admin! Select an option from the sidebar to continue.</p>
      `;
      break;

    case "addFlight":
      formHTML = `
        <h2 style="text-align:center;">➕ Add Flight</h2>
        <form onsubmit="addFlight(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <input type="text" placeholder="Destination" required>
          <input type="text" placeholder="Source" required>
          <button type="submit">Add Flight</button>
        </form>
      `;
      break;

    case "removeFlight":
      formHTML = `
        <h2 style="text-align:center;">❌ Remove Flight</h2>
        <form onsubmit="removeFlight(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <button type="submit">Remove Flight</button>
        </form>
      `;
      break;

    case "updateFlight":
      formHTML = `
        <h2 style="text-align:center;">🔄 Update Flight</h2>
        <form onsubmit="updateFlight(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <input type="text" placeholder="New Destination">
          <input type="text" placeholder="New Source">
          <button type="submit">Update Flight</button>
        </form>
      `;
      break;

    case "modifySchedule":
      formHTML = `
        <h2 style="text-align:center;">🗓 Modify Schedule</h2>
        <form onsubmit="modifyFlightSchedule(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <input type="datetime-local" required>
          <button type="submit">Modify Schedule</button>
        </form>
      `;
      break;

    case "addSchedule":
      formHTML = `
        <h2 style="text-align:center;">📅 Add Flight Schedule</h2>
        <form onsubmit="addFlightSchedule(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <input type="datetime-local" required>
          <button type="submit">Add Schedule</button>
        </form>
      `;
      break;

    case "addBooking":
      formHTML = `
        <h2 style="text-align:center;">➕ Add Booking</h2>
        <form onsubmit="addBooking(); return false;">
          <input type="text" placeholder="Booking ID" required>
          <input type="text" placeholder="Passenger Name" required>
          <button type="submit">Add Booking</button>
        </form>
      `;
      break;

    case "updateBooking":
      formHTML = `
        <h2 style="text-align:center;">🔄 Update Booking</h2>
        <form onsubmit="updateBooking(); return false;">
          <input type="text" placeholder="Booking ID" required>
          <input type="text" placeholder="New Passenger Name">
          <button type="submit">Update Booking</button>
        </form>
      `;
      break;

    case "deleteBooking":
      formHTML = `
        <h2 style="text-align:center;">❌ Delete Booking</h2>
        <form onsubmit="deleteBooking(); return false;">
          <input type="text" placeholder="Booking ID" required>
          <button type="submit">Delete Booking</button>
        </form>
      `;
      break;
  }

  content.innerHTML = formHTML;
}

// Placeholder alert functions
function addFlight() { alert("Flight added!"); }
function removeFlight() { alert("Flight removed!"); }
function updateFlight() { alert("Flight updated!"); }
function modifyFlightSchedule() { alert("Schedule modified!"); }
function addFlightSchedule() { alert("Schedule added!"); }
function addBooking() { alert("Booking added!"); }
function updateBooking() { alert("Booking updated!"); }
function deleteBooking() { alert("Booking deleted!"); }
