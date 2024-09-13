// JavaScript to dynamically show/hide the answer field
const securityQuestion = document.getElementById('security-question');
const securityAnswerDiv = document.getElementById('security-answer-div');

// Add an event listener for when the dropdown changes
securityQuestion.addEventListener('change', function () {
    // Show the answer input if a valid question is selected (i.e., not the first option)
    if (securityQuestion.value !== "0" && securityQuestion.value !== "") {
        securityAnswerDiv.style.display = 'block';  // Show the input
    } else {
        securityAnswerDiv.style.display = 'none';  // Hide the input
    }
});