
function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let college = document.getElementById("college").value;
    let dept = document.getElementById("dept").value;
    let year = document.getElementById("year").value;
    let event = document.getElementById("event").value;

    let valid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Enter name";
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Enter valid email";
        valid = false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Enter 10 digit phone";
        valid = false;
    }

    if (gender == "" || college == "" || dept == "" ||
        year == "" || event == "") {
        alert("Please fill all fields");
        valid = false;
    }

    if (valid) {
        document.getElementById("result").innerHTML =
            "<h3>Registration Successful!</h3>" +
            "Name: " + name + "<br>" +
            "Email: " + email + "<br>" +
            "Phone: " + phone + "<br>" +
            "Gender: " + gender + "<br>" +
            "College: " + college + "<br>" +
            "Department: " + dept + "<br>" +
            "Year: " + year + "<br>" +
            "Event: " + event;
    }
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
}
