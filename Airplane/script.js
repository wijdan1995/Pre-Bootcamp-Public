var player = {
  left: 450,
  top: 620,
};

var enemies = [
  { left: 350, top: 200 },
  { left: 450, top: 30 },
  { left: 200, top: 150 },
  { left: 600, top: 400 },
  { left: 100, top: 100 },
  { left: 750, top: 100 },
];

var missiles = []

drawPlayer = () => {
  content = "";
  content = `<div class="player" style="left:${player.left}px; top:${player.top}px;"></div>`;

  document.getElementById("players").innerHTML = content;
};


drawEnemies = () => {
  content = "";

  for (var i = 0; i < enemies.length; i++) {
    content += `<div class="enemy" style="left:${enemies[i].left}px; top:${enemies[i].top}px;"></div>`;
  }

  document.getElementById("enemies").innerHTML = content;
};

drawMissiles = () => {
  content = "";
  for (var i = 0; i < missiles.length; i++) {
    content += `<div class="missile" style="left:${missiles[i].left}px; top:${missiles[i].top}px;"></div>`;
  }
  document.getElementById("missiles").innerHTML = content;

}

moveEnemies = () => {
  for (var i = 0; i < enemies.length; i++) {
    if (enemies[i].top > 630){
      enemies.splice(i, 1)
    } else {
      enemies[i].top = enemies[i].top + 8;
    }
    
  }
};

moveMissiles = () => {
  for (var i = 0; i < missiles.length; i++) {
    missiles[i].top = missiles[i].top - 10;
  }
}

gameLoop = () => {
  drawPlayer();
  moveEnemies();
  drawEnemies();
  moveMissiles()
  drawMissiles()
  setTimeout(gameLoop, 100);
};
gameLoop();

document.onkeydown = (e) => {
  if (e.keyCode == 37) {
    //left
    if (player.left - 10 > 0) {
      player.left = player.left - 10;
    }
  }
  if (e.keyCode == 39) {
    //right
    if (player.left + 10 < 840) {
      player.left = player.left + 10;
    }
  }
  if (e.keyCode == 38) {
    //up
    if (player.top - 10 > 400) {
      player.top = player.top - 10;
    }
  }
  if (e.keyCode == 40) {
    //down
    if (player.top - 10 < 610) {
      player.top = player.top + 10;
    }
  }
  if (e.keyCode == 32) {
    //fire
    // position diff bc of the size of the player img
    missiles.push({left: (player.left+28), top: (player.top-15)})
    drawMissiles()
  }
  drawPlayer();
};


