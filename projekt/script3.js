let clickCount = 0;

const cookieButton = document.getElementById("cookieButton");
const clickDisplay = document.getElementById("clicks");
const clickText = document.getElementById("clickText");

function getClickText(count) {
    // Preprosta funkcija za slovensko sklanjanje
    if (count === 1) {
        return "krompir";
    } else if (count > 2 && count < 5) {
        return "krompirje";
	} else if (count ==2) {
        return "krompirja";
    } else {
        return "krompirjev";
    }
}

cookieButton.addEventListener("click", function() {
    clickCount++;
    clickDisplay.textContent = clickCount;
    clickText.textContent = `Imate ${clickCount} ${getClickText(clickCount)}!`;
});
