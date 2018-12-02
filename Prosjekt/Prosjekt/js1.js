var spaceinvaders = document.getElementById("spaceinvaders");

spaceinvaders.onmouseover = function (event) {
    spaceinvaders.style.backgroundImage = `url("https://i.gyazo.com/a08e4e733a325b1165f2fe81d393f912.gif")`;
    console.log("hei")
};

spaceinvaders.onmouseleave = function (event) {
    spaceinvaders.style.backgroundImage = `url("spaceinvaders.png")`;
    console.log("hei")
};

