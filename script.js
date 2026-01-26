let queue = JSON.parse(localStorage.getItem("queue")) || [];

function addToQueue() {
  let copies = document.getElementById("copies").value;
  if (copies === "" || copies <= 0) {
    alert("Enter valid number of copies");
    return;
  }

  queue.push(Number(copies));
  localStorage.setItem("queue", JSON.stringify(queue));

  let position = queue.length;
  let time = queue.reduce((a, b) => a + b, 0);

  document.getElementById("output").innerText =
    `Your Queue Number: ${position}, Estimated Time: ${time} minutes`;
}

function updateDashboard() {
  let q = JSON.parse(localStorage.getItem("queue")) || [];
  document.getElementById("people").innerText = q.length;
  document.getElementById("time").innerText = q.reduce((a, b) => a + b, 0);
}

function clearQueue() {
  localStorage.removeItem("queue");
  updateDashboard();
}

if (window.location.pathname.includes("dashboard.html")) {
  updateDashboard();
}




