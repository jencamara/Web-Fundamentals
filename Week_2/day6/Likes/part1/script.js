var likenumber = 0;
var likenumberElement = document.querySelector("#likenumber");

console.log(likenumberElement)

function plus1() {
    likenumber++;
    likenumberElement.innerText = likenumber + " likes";
    console.log(likenumber);
}