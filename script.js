document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value;

    if (name === "" || email === "" || department === "") {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Appointment booked successfully! We will contact you soon.");

    this.reset();
});