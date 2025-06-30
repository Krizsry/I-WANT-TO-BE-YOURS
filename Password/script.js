const container = document.querySelector(".container");
const hiddenInput = document.querySelector(".hidden-input");
const revealedInput = document.querySelector(".revealed-input");
const button = document.querySelector(".button");

const correctPassword = "12/13/2009"; // Set the correct password
const redirectUrl = "https://app.sane.fyi/s/81bdf3ce-cb28-11ef-aaac-4387590202eb?t=bvdOPWxms5ghdxfbH2YE&utm_source=share-menu&utm_medium=web"; // Set the redirect URL

// Create a notification element
const notification = document.createElement("div");
notification.className = "notification";
notification.style.position = "absolute";
notification.style.top = "10px";
notification.style.right = "10px";
notification.style.padding = "10px 20px";
notification.style.backgroundColor = "#ffcccb";
notification.style.color = "#000";
notification.style.borderRadius = "5px";
notification.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
notification.style.display = "none";
notification.innerText = "You’ll know the password when we’re officially dating";
document.body.appendChild(notification);

const timeline = anime
  .timeline({
    duration: 300,
    easing: "cubicBezier(.4, 0, .2, 1)",
    autoplay: false,
  })
  .add(
    {
      targets: document.querySelector(".eye-lid"),
      d:
        "M -5,-5 V 37 H 15.6 C 15.6,37 21.35124,23.469343 34.312131,23.469343 47.273022,23.469343 53.4,37 53.4,37 H 77 V -5 Z",
    },
    0
  )
  .add(
    {
      targets: document.querySelector(".eye-lashes"),
      rotateX: ["180deg", "0deg"],
    },
    0
  );

// Sync the hidden and revealed input values
hiddenInput.addEventListener("input", () => {
  if (!container.classList.contains("active")) {
    revealedInput.value = hiddenInput.value;
  }
});
revealedInput.addEventListener("input", () => {
  if (container.classList.contains("active")) {
    hiddenInput.value = revealedInput.value;
  }
});



// Toggle the visibility and animation when clicking the button
button.addEventListener("click", () => {
  container.classList.toggle("active");
  timeline.reverse();
  timeline.play();
  if (container.classList.contains("active")) {
    revealedInput.focus();
  } else {
    hiddenInput.focus();
  }
});

// Check if the correct password is entered
hiddenInput.addEventListener("change", checkPassword);
revealedInput.addEventListener("change", checkPassword);

function checkPassword() {
  const inputValue = hiddenInput.value || revealedInput.value;
  if (inputValue === correctPassword) {
    // Redirect to the specified URL
    window.location.href = redirectUrl;
  } else {
    // Show the notification for incorrect password
    showNotification("You’ll know the password when we’re officially dating");
  }
}

function showNotification(message) {
  notification.innerText = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000); // Hide notification after 3 seconds
}

// Initialize the animation in reversed state
timeline.reverse();
timeline.play();

// Create an audio element for the beep sound
const beepSound = new Audio('Beep.mp3'); // Replace with the correct path to your beep.mp3

// Play the beep sound when the notification is shown
function showNotification(message) {
  beepSound.play(); // Play the beep sound
  notification.innerText = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 3000); // Hide notification after 3 seconds
}
