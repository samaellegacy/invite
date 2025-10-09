const name = "Ananya"; // Dynamic name

document.getElementById("personalMessage").innerText = `Hey ${name} ❤️, you’re invited to a special date with me.`;

function checkAnswer(){
    const ans = document.getElementById('answer').value.trim().toLowerCase();
    if(ans === "piano" || ans === "keyboard"){
        document.getElementById('puzzle').style.display = 'none';
        document.getElementById('invite').style.display = 'block';
    } else {
        alert("Hmm… try again 😜");
    }
}

function respond(answer) {
    document.getElementById('response').innerHTML = answer === 'yes' 
        ? "Yay! Can't wait 😍"
        : "Oh… maybe next time 😢";
}
