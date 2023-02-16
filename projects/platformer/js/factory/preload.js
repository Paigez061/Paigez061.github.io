(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;

    // TODO : Load config for url //
    
    opspark.preload = function (game) {
        game.load.image('cannon', './asset/cannonGreen.png');
        game.load.image('projectile', './asset/GoldOrbProjectile.png');
        game.load.image('platform', './asset/platform (1).png');
        game.load.image('db', './asset/collectable/database.png');
        game.load.image('coin', './asset/collectable/CloverCoin.png');
        game.load.image('grace', './asset/collectable/grace-head.png');
        game.load.image('kennedi', './asset/collectable/kennedi-head.png');
        game.load.image('bigCoin', './asset/collectable/BigCloverCoin.png');
        game.load.atlas('halle', './asset/halle/phaser-json-array/halle.png', './asset/halle/phaser-json-array/halle.json');
    };
})(window);
