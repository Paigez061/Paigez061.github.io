(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    /*
     * ground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 4, 2); // DO NOT DELETE

    // first set of platforms on the left
    createPlatform(300, 575, 0.5);
    createPlatform(0, 475, 0.4);
    createPlatform(300, 375, 0.5);
    createPlatform(0, 275, 0.4);
    createPlatform(315, 175, 0.4);
    createPlatform(0, 105, 0.4);

    //Pillars//
    createPlatform(600, 260, 0.1, 15);
    createPlatform(900, 275, 0.1, 8.96);

    //Inside box//

    //inside pillars//
    createPlatform(700, 275, 2.1);
    createPlatform(640, 400, 0.5);
    createPlatform(700, 530, 0.5);
    //outside pillars//

    createPlatform(1240, 575, 0.4);
    createPlatform(940, 475, 0.4);
    createPlatform(1240, 400, 0.7);
    
    //Staircase//
    createPlatform(950, 210, 0.5, 2.05);
    createPlatform(1150, 150, 0.5, 3.94);
    createPlatform(1350, 90, 0.5, 5.80);

    //Above Staircase//
    createPlatform(800, 90, 0.4)

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  platform.init = init;
})(window);
