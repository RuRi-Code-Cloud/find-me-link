function SendMail() {
  // Extract values from input fields
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  // Send email using emailjs library
  emailjs
    .send("service_fet776s", "template_ij97fli", params)
    .then(function (res) {
      // Display success message with status
      alert("Success!" + res.status);
    })
    .catch(function (error) {
      // Handle errors if any
      console.error("Failed to send email: ", error);
    });
}
