// Get existing queue or create new
let queue = JSON.parse(localStorage.getItem("printQueue")) || [];

// USER: Add order
function addToQueue() {
  const name = document.getElementById("username").value;
  const copies = parseInt(document.getElementById("copies").value);

  if (!name || !copies || copies <= 0) {
    alert("Please enter all details correctly");
    return;
  }

  const order = {
    name: name,
    copies: copies
  };

  queue.push(order);
  localStorage.setItem("printQueue", JSON.stringify(queue));

  const queueNo = queue.length;
  const totalTime = queue.reduce((sum, o) => sum + o.copies, 0);

  document.getElementById("result").innerHTML = `
    <p><b>Queue Number:</b> ${queueNo}</p>
    <p><b>Estimated Time:</b> ${totalTime} minutes</p>
  `;
}

// OWNER: Load dashboard data
function loadDashboard() {
  const q = JSON.parse(localStorage.getItem("printQueue")) || [];
  const list = document.getElementById("orderList");
  const people = document.getElementById("people");
  const time = document.getElementById("time");

  list.innerHTML = "";

  q.forEach((order, index) => {
    list.innerHTML += `
      <li>Queue ${index + 1}: ${order.name} - ${order.copies} copies</li>
    `;
  });

  people.innerText = q.length;
  time.innerText = q.reduce((sum, o) => sum + o.copies, 0) * 2;
}


// OWNER: Clear queue
function clearQueue() {
  localStorage.removeItem("printQueue");
  document.getElementById("orderList").innerHTML = "";
  document.getElementById("people").innerText = 0;
  document.getElementById("time").innerText = 0;
}








