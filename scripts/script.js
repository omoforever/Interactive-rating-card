let selectedRating = null;
var ratingState = document.getElementById("rating-state");
var thankYouState = document.getElementById("thankyou-state");

thankYouState.style.display = "none"; //on initial load, hide the thankyou state


// Add event listeners to all rating buttons
document.querySelectorAll('.rating-btn').forEach(button => {
    button.addEventListener('click', () => {
        selectedRating = button.getAttribute('data-rating');
        console.log(`Rating ${selectedRating} selected`);

        // Optional: Visual feedback - remove active class from all, add to clicked
        document.querySelectorAll('.rating-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

function printRating() {
    var ratingMessage = document.getElementById("user-selection");
    if (selectedRating) {
        ratingState.style.display = "none";
        thankYouState.style.display = "flex"
        ratingMessage.innerHTML = `<p>You selected ${selectedRating} out of 5</p>`;
    } else {
        ratingMessage.innerHTML = `<p>Please select a rating first</p>`;
    }
}
