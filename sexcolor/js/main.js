/* Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao < nome >“, il colore del nome deve essere azzurro o rosa a
seconda del sesso inserito. */

var name = prompt("Enter your name");
var sex = prompt("Enter your sex (m/f)");
// document.querySelector(".name").style.color = sex === "m" ? "lightskyblue" : "pink";
document.querySelector(".name").className += sex === "m" ? " lightskyblue-font" : " pink-font";
document.querySelector(".name").textContent = name;
