const text = document.getElementById('text');
text.title = "New text";
console.log(text.title);

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "New <br> string";

//document.getElementById("text").style.color = "white";

//const spans = document.getElementsByTagName('span');

const spans = document.getElementsByClassName('simple-text');

for (let i = 0; i < spans.length; i++) {
  console.log(spans[i].innerHTML);
}