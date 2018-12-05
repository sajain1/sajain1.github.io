var spaceinvaders = document.getElementById("spaceinvaders");

spaceinvaders.onmouseover = function (event) {
    spaceinvaders.style.backgroundImage = `url("https://i.gyazo.com/a08e4e733a325b1165f2fe81d393f912.gif")`;
    console.log("hei")
};

spaceinvaders.onmouseleave = function (event) {
    spaceinvaders.style.backgroundImage = `url("spaceinvaders.png")`;
    console.log("hei")
};

var noe = document.getElementById("noe");

noe.onmouseover = function (event) {
    noe.style.backgroundImage = `url("https://i.gyazo.com/bb29828f52f785bb372796c1f116dd0f.gif")`;
    console.log("hei")
};
noe.onmouseleave = function (event) {
    noe.style.backgroundImage = `url("Spill.png")`;
    console.log("hei")
};