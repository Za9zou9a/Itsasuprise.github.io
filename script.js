function validateForm(event) {
    event.preventDefault(); // prevent the default form submission behavior

    var yesChecked = document.getElementById("yes").checked;
    var noChecked = document.getElementById("no").checked;

    if (!yesChecked && !noChecked) {
        alert("Please choose a response.");
        return false;
    }

    // Handle form submission logic here if needed

    return true;
}