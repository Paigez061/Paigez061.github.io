var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    // createRivers IS AN OBSTACLE 
    function createRivers(xZone) {
      var hitZoneSize = 13;
      var damageFromObstacle = 5;
      //Hit Zone
      var riverHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      riverHitZone.x = xZone;
      riverHitZone.y = groundY - 5;
      game.addGameItem(riverHitZone);
      //Image
      var greenRiverImg = draw.bitmap("img/greenRiver.png");
      greenRiverImg.x = -108;
      greenRiverImg.y = -11;
      riverHitZone.addChild(greenRiverImg);
    }
    function createRoots(xZone) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      //Hit one
      var rootsHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      rootsHitZone.x = xZone;
      rootsHitZone.y = groundY - 5;
      game.addGameItem(rootsHitZone);
      //Image
      var rootsImg = draw.bitmap("img/purpleRoots.png");
      rootsImg.x = -50;
      rootsImg.y = -70;
      rootsImg.scaleX = .10;
      rootsImg.scaleY = .10;
      rootsHitZone.addChild(rootsImg);
    }
    createRoots(600);
    createRivers(400);
    createRivers(1000);
    createRivers(1800);

    
    function createEnemySpirit(x) {
      //Hit Zone
      var enemyHitZone = game.createGameItem("enemy", 25);
      enemyHitZone.x = x;
      enemyHitZone.y = groundY - 50;
      enemyHitZone.velocityX = -3;
      game.addGameItem(enemyHitZone);
      //Image
      var spiritEnemyImg = draw.bitmap("img/greenSpirit");
      spiritEnemyImg.x = -25;
      spiritEnemyImg.y = -25;
      spiritEnemyImg.ScaleX = .10;
      spiritEnemyImg.ScaleY = .10;
      enemyHitZone.addChild(spiritEnemyImg);
      //Hit Zone Collision
      enemyHitZone.onPlayerCollision = function () {
        game.changeIntegrity(-10);
      }
      enemyHitZone.onProjectileCollision = function () {
        game.increaseScore(100);
        enemyHitZone.fadeOut();
      }
    }


    function createRewardLily(x) {
      //Hit Zone
      var lilyHitZone = game.createGameItem("reward", 25);
      lilyHitZone.x = x;
      lilyHitZone.y = groundY - 20;
      lilyHitZone.velocityX = -3;
      game.addGameItem(lilyHitZone);
      //Image
      var yellowlilyImg = draw.bitmap("img/YellowLilyGood.png");
      yellowlilyImg.scaleX = .10;
      yellowlilyImg.scaleY = .10;
      yellowlilyImg.x = -50;
      yellowlilyImg.y = -50;
      lilyHitZone.addChild(yellowlilyImg);
      //Hit Zone Collision
      lilyHitZone.onPlayerCollision = function () {
        game.increaseScore(100);
        lilyHitZone.fadeOut();
      }
    }
   
    createRewardLily(1500);
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
