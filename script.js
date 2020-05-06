let text = "Псс... Хочешь увидеть немного любительского программирования? <br> Убери детей от экрана и опускайся вниз.";
let i = 0;

function type() {
    i++;
    if (i <= text.length)
        document.getElementById("type_text").innerHTML = text.substr(0, i) + '|';

    setTimeout(type, 70);
}
type();
