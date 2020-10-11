var world = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 3, 1, 3, 1, 3, 3, 1, 3, 2, 3, 2, 1],
    [1, 3, 3, 3, 3, 2, 3, 3, 2, 3, 2, 1, 2, 1],
    [1, 3, 1, 1, 1, 1, 3, 3, 1, 3, 1, 3, 2, 1],
    [1, 3, 1, 3, 3, 2, 3, 3, 1, 3, 2, 1, 2, 1],
    [1, 3, 1, 1, 1, 2, 1, 3, 2, 3, 1, 3, 2, 1],
    [1, 3, 3, 1, 3, 2, 3, 3, 1, 3, 2, 1, 2, 1],
    [1, 3, 3, 3, 2, 1, 3, 1, 1, 3, 1, 3, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];


var worldDict = {
  0: "blank",
  1: "wall",
  2: "sushi",
  3: "onigiri",
};
var score = 0;

drawWorld = () => {
  var output = "";
  for (var row = 0; row < world.length; row++) {
    // create rows
    output += '<div class="row">';
    for (var x = 0; x < world[row].length; x++) {
      output += `<div class="${worldDict[world[row][x]]}"></div>`;
      //   console.log(worldDict[world[row][x]]);
    }
    output += "</div>";
  }
  document.getElementById("world").innerHTML = output;
};
drawWorld();

var ninjaMan = {
  x: 1,
  y: 1,
};

drawNinjaMan = () => {
  // 40 blocks size
  document.getElementById("ninjaman").style.top = ninjaMan.y * 40 + "px";
  document.getElementById("ninjaman").style.left = ninjaMan.x * 40 + "px";
};
drawNinjaMan();

document.onkeydown = (e) => {
  if (e.keyCode == 37) {
    //left
    if (world[ninjaMan.y][ninjaMan.x - 1] != 1) {
      document.getElementById("ninjaman").style.transform = "scaleX(-1)";
      ninjaMan.x--;
    }
  }
  if (e.keyCode == 39) {
    //right
    if (world[ninjaMan.y][ninjaMan.x + 1] != 1) {
      document.getElementById("ninjaman").style.transform = "rotate(0deg)";
      ninjaMan.x++;
    }
  }
  if (e.keyCode == 38) {
    //up
    if (world[ninjaMan.y - 1][ninjaMan.x] != 1) {
      document.getElementById("ninjaman").style.transform = "rotate(-90deg)";
      ninjaMan.y--;
    }
  }
  if (e.keyCode == 40) {
    //down
    if (world[ninjaMan.y + 1][ninjaMan.x] != 1) {
      document.getElementById("ninjaman").style.transform = "rotate(90deg)";
      ninjaMan.y++;
    }
  }
  if (world[ninjaMan.y][ninjaMan.x] == 2) {
    world[ninjaMan.y][ninjaMan.x] = 0;
    score += 10;
    document.getElementById("score").innerHTML = score;
  }
  if (world[ninjaMan.y][ninjaMan.x] == 3) {
    world[ninjaMan.y][ninjaMan.x] = 0;
    score += 5;
    document.getElementById("score").innerHTML = score;
  }

  drawWorld();
  drawNinjaMan();
};
