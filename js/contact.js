document.getElementById("contactform").addEventListener("submit", function(event){
    event.preventDefault();  // Prevent the default form submission

    // Gather form data
    let formData = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        detail: document.getElementById("detail").value  // Changed 'comments' to 'detail'
    };

    // Send data to the API using fetch
    fetch('https://collegeproject1211.pythonanywhere.com/contactpage/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())  // Parse JSON response
    .then(data => {
        console.log('Success:', data);
        alert("Muofaqyatli royhatdan o'tdingiz'");
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting the form');
    });
});