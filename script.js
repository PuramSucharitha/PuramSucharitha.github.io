document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const result = await response.json();

  if (result.success) {
    showThankYouModal();
    this.reset();
  } else {
    alert("Error sending message. Try again.");
  }

function showThankYouModal() {
  const modal = document.getElementById('thankYouModal');
  modal.style.display = 'block';

  // Hide the modal after 3 seconds
  setTimeout(() => {
    modal.style.display = 'none';
  }, 3000);
}
});
