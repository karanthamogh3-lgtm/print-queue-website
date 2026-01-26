let queueCount = 0;

document.getElementById("printForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const copies = parseInt(document.getElementById("copies").value);

  queueCount++;
  const timePerCopy = 1; // 1 minute per copy
  const estimatedTime = copies * timePerCopy;

  document.getElementById("result").innerHTML = `
    <h3>✅ Order Placed!</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Queue Number:</b> ${queueCount}</p>
    <p><b>Estimated Time:</b> ${estimatedTime} minutes</p>
  `;
});





