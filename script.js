// Get name from URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name') || "there";

// Set personalized message
document.getElementById("personalMessage").innerText = `Hey ${name},`;

// Puzzle logic
function checkAnswer() {
  const ans = document.getElementById('answer').value.trim().toLowerCase();
  if (ans === "piano" || ans === "a piano" || ans === "keyboard") {
      document.getElementById('puzzle').style.display = 'none';
      document.getElementById('loading').style.display = 'block';

      setTimeout(() => {
          document.getElementById('loading').style.display = 'none';
          document.getElementById('invite').style.display = 'block';
      }, 5000);
  } else {
      alert("Hmm… try again 😜");
  }
}

// Handle yes/no buttons
function respond(answer) {
  const responseEl = document.getElementById('response');
  responseEl.innerHTML = answer === 'yes'
      ? "Yay! Can't wait 😍"
      : "Oh… maybe next time 😢";
}

function goToCanva() {
  // Canva invitation link
  window.location.href = "https://www.canva.com/design/DAGg-fGIpq8/VIXuBWzopXijq-Gnz_9Y3g/edit?utm_content=DAGg-fGIpq8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
}
