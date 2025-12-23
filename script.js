const form = document.getElementById('orderForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    const fileInput = document.getElementById('fileInput');
    const fileName = fileInput.files[0].name;

    const newOrder = {
        name: form[0].value,
        file: fileName,
        copies: form[2].value
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    alert("Document Selected & Order Placed!");
    form.reset();
});


