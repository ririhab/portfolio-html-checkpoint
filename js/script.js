// I'm kinda new to javascript so tbh I got it from chatgpt
//js to play audio when clicking everywhere first time on the page 
document.addEventListener("click", function() {
    const audio = document.getElementById("welcomeAudio");
    if (audio) {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
    }
}, { once: true }); // the audio play once only

//pdf download , It's not really working but I left it in
function downloadpdf(){
    document.getElementById("./src/resume.pdf").click();
}