// Get name from URL
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name') || "there";

document.getElementById("personalMessage").innerText = `Hey ${name},`;

// Puzzle logic with 5-second reveal
function checkAnswer(){
    const ans = document.getElementById('answer').value.trim().toLowerCase();
    if(ans === "piano" || ans === "a piano" || ans === "keyboard"){
        document.getElementById('puzzle').style.display = 'none';
        document.getElementById('loading').style.display = 'block';

        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('invite').style.display = 'block';
        }, 5000); // 5-second delay
    } else {
        alert("Hmm… try again 😜");
    }
}

function respond(answer) {
    document.getElementById('response').innerHTML = answer === 'yes' 
        ? "Yay! Can't wait 😍"
        : "Oh… maybe next time 😢";
}


function goToCanva(){
    window.location.href = "https://drive.google.com/file/d/1ZO5N54xUSXCKZTw0iBt6uYFDwLc4n6Ic/view?usp=sharing";
}
