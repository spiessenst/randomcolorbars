class Tile {
  constructor(name, holder) {
    this.name = name;
    this.holder = holder;
    this.htmlRef = this.initHTML();
    this.color = this.setStyling();
    this.setUpEvents();
  }

  initHTML() {
    this.holder.insertAdjacentHTML("beforeend", `<div class="tile"></div>`);

    return this.holder.querySelector(".tile:last-child");
  }

  setStyling() {
    this.htmlRef.style.height = getRandomInRange(300, 500) + "px";
    return (this.htmlRef.style.backgroundColor = getRandomColor());
  }

  setUpEvents() {
    this.htmlRef.onclick = () => {
      holder.style.backgroundColor = this.color;
    };
  }

  animate() {
    this.htmlRef.style.height = getRandomInRange(200, 600) + "px";
    holder.style.backgroundColor = this.color;
  }
}

const holder = document.querySelector("body");
const AllTiles = [];
const button = document.querySelector("button");
const message = document.querySelector(".message");

holder.onclick = (e) => {
  if (e.target.classList.contains("main")) {
    if (AllTiles.length < Math.floor(window.innerWidth / 90)) {
      AllTiles.push(new Tile(getRandomName(), holder));
      button.style.display = "block";
    }
  }
};

let int;

button.onclick = () => {
  let i = 0;
  int = setInterval(function () {
    if (i < AllTiles.length) {
      AllTiles[i].animate();
      i++;
    } else {
      i = 0;
      clearInterval(int);
    }
  }, 500);
};

function getRandomName() {
  return Math.random().toString(36).substring(2, 6);
}

function getRandomColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
