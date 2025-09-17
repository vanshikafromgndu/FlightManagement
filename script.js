function showSection(action) {
  const content = document.getElementById("content");
  let formHTML = "";

  switch (action) {
    case "dashboard":
      formHTML = `
        <div class="cards animate">
          <div class="card">
            <h3>Flights</h3>
            <p id="flightCount">0</p>
          </div>
          <div class="card">
            <h3>Bookings</h3>
            <p id="bookingCount">0</p>
          </div>
          <div class="card">
            <h3>Schedules</h3>
            <p id="scheduleCount">0</p>
          </div>
        </div>
        <p style="text-align:center;">Welcome back, Admin! Select an option from the sidebar to continue.</p>
      `;
      break;

    case "addFlight":
      formHTML = `
        <h2 class="title animate">➕ Add Flight</h2>
        <form class="form animate" onsubmit="addFlight(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <input type="text" placeholder="Destination" required>
          <input type="text" placeholder="Source" required>
          <button type="submit" class="btn">Add Flight</button>
        </form>
      `;
      break;

    case "removeFlight":
      formHTML = `
        <h2 class="title animate">❌ Remove Flight</h2>
        <form class="form animate" onsubmit="removeFlight(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <button type="submit" class="btn">Remove Flight</button>
        </form>
      `;
      break;

    case "updateFlight":
      formHTML = `
        <h2 class="title animate">🔄 Update Flight</h2>
        <form class="form animate" onsubmit="updateFlight(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <input type="text" placeholder="New Destination">
          <input type="text" placeholder="New Source">
          <button type="submit" class="btn">Update Flight</button>
        </form>
      `;
      break;

    case "modifySchedule":
      formHTML = `
        <h2 class="title animate">🗓 Modify Schedule</h2>
        <form class="form animate" onsubmit="modifyFlightSchedule(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <input type="datetime-local" required>
          <button type="submit" class="btn">Modify Schedule</button>
        </form>
      `;
      break;

    case "addSchedule":
      formHTML = `
        <h2 class="title animate">📅 Add Flight Schedule</h2>
        <form class="form animate" onsubmit="addFlightSchedule(); return false;">
          <input type="text" placeholder="Flight Number" required>
          <input type="datetime-local" required>
          <button type="submit" class="btn">Add Schedule</button>
        </form>
      `;
      break;

    case "addBooking":
      formHTML = `
        <h2 class="title animate">➕ Add Booking</h2>
        <form class="form animate" onsubmit="addBooking(); return false;">
          <input type="text" placeholder="Booking ID" required>
          <input type="text" placeholder="Passenger Name" required>
          <button type="submit" class="btn">Add Booking</button>
        </form>
      `;
      break;

    case "updateBooking":
      formHTML = `
        <h2 class="title animate">🔄 Update Booking</h2>
        <form class="form animate" onsubmit="updateBooking(); return false;">
          <input type="text" placeholder="Booking ID" required>
          <input type="text" placeholder="New Passenger Name">
          <button type="submit" class="btn">Update Booking</button>
        </form>
      `;
      break;

    case "deleteBooking":
      formHTML = `
        <h2 class="title animate">❌ Delete Booking</h2>
        <form class="form animate" onsubmit="deleteBooking(); return false;">
          <input type="text" placeholder="Booking ID" required>
          <button type="submit" class="btn">Delete Booking</button>
        </form>
      `;
      break;
  }

  // Add fade-in + slide animation
  content.classList.remove("fade-in");
  void content.offsetWidth; // trigger reflow
  content.classList.add("fade-in");

  content.innerHTML = formHTML;

  // Animate dashboard numbers
  if (action === "dashboard") {
    animateCounter("flightCount", 120);
    animateCounter("bookingCount", 450);
    animateCounter("scheduleCount", 78);
  }
}

// Counter animation
function animateCounter(id, target) {
  let count = 0;
  const element = document.getElementById(id);
  const step = Math.ceil(target / 40); // smooth steps
  const interval = setInterval(() => {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    element.textContent = count;
  }, 40);
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

// Inject some CSS animations dynamically
const style = document.createElement("style");
style.innerHTML = `
  .fade-in { animation: fadeIn 0.6s ease; }
  .animate { animation: slideUp 0.7s ease; }
  .btn { 
    transition: transform 0.2s ease, background 0.3s;
  }
  .btn:hover {
    background: #007bff;
    color: #fff;
    transform: scale(1.05);
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;
document.head.appendChild(style);
