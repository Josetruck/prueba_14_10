fetch('https://api.github.com/emojis').then(res=>res.json()).then((emoji)=>{localStorage.setItem("emojis" ,JSON.stringify(emoji))})
var emojis = JSON.parse(localStorage.getItem("emojis"))
var claves = Object.keys(emojis)
var conY = claves.filter((element)=> {return element.includes('y')})
for(let i=0; i<conY.length;i++){
    var img = document.createElement("img");
    img.src = emojis[`${conY[i]}`];
    document.body.appendChild(img)
}
