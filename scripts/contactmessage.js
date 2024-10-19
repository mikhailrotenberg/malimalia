(function(){
    emailjs.init("xkEVHgg2OobkpFCwu");
 })();
 
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate Name
    if (name === "") {
        alert("Name is required");
        return;
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        alert("Email is required");
        return;
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    // Validate Message
    if (message === "") {
        alert("Message is required");
        return;
    }

    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    document.getElementById("contactForm").submit();

    // Send email using EmailJS
    emailjs.send('service_hg8kax8', 'template_ttacyfu', {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }).then(function (response) {
        alert('Message sent successfully!', response.status, response.text);
    }, function (err) {
        alert('Failed to send the message. Please try again.', err);
    });

});
