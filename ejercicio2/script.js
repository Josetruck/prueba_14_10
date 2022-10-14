fetch('https://api.github.com/emojis').then(res=>res.json()).then((emoji)=>{localStorage.setItem("emojis" ,JSON.stringify(emoji))})
var emojis = JSON.parse(localStorage.getItem("emojis"));
console.log(emojis)
var emo100 = emojis["100"]
var emoThUP = emojis["thumbsup"]
var emoThDo = emojis["thumbsdown"]
var img1=document.createElement("img");
var img2=document.createElement("img");
var img3=document.createElement("img");
img3.src = emo100;
img2.src = emoThDo;
img1.src = emoThUP;

document.body.appendChild(img1)
document.body.appendChild(img2)
document.body.appendChild(img3)