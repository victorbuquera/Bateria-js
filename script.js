document.addEventListener("change", colorchange);
function colorchange(){
    let color = document.getElementById("color-picker").value;
    document.body.style.backgroundColor = color;
}
function bumbo(){
    let bumbo = document.addEventListener("keypress", "space")
}
