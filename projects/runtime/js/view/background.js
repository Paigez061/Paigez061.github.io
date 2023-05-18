var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):

        //Layer One Variables
        var blueGrasses1t = [];
        var tripTree1s = [];
        var blueGrasses1 = [];
        
        //Layer Two Variables
        var blueGrasses2t = [];
        var tripTree2s = [];
        var blueGrasses2 = [];
        
        //Layer Three Variables
        var blueGrasses3t = [];
        var tripTree3s = [];
        var blueGrasses3 = [];
        
        //Layer Four Variables
        var blueGrasses4t = [];
        var tripTree4s = [];
        var blueGrasses4 = [];
        var blueGrasses4td = [];

       
        
        
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, groundY,'black');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            for (var loop = 0; loop < 100; loop++) {
                var star = draw.polyStar(6, 4, 3, 500, "#82012f", "#cc509e", .35);
                star.x = canvasWidth * Math.random();
                star.y = groundY * Math.random();
                background.addChild(star);
            }
            var moon = draw.bitmap("img/purpleMoon.png");
            moon.x = canvasWidth - 350;
            moon.y = 0;
            moon.scaleX = .25;
            moon.scaleY = .25;
            background.addChild(moon);

            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?

            // START OF LAYER ONE //
            for (var i = 0; i < 10; i++) {
                var blueGrass1t = draw.bitmap("img/blueGrass.png");
                blueGrass1t.x = 250 * i - 125;
                blueGrass1t.y = groundY - 135;
                blueGrass1t.scaleX = .25;
                blueGrass1t.scaleY = .25;
                background.addChild(blueGrass1t);
                blueGrasses1t.push(blueGrass1t);
            }
            for (var i = 0; i < 8; i++) {
                var tripTree1 = draw.bitmap("img/triptree1.png");
                tripTree1.x = 250 * i;
                tripTree1.y = groundY - 410;
                tripTree1.scaleX = .45;
                tripTree1.scaleY = .45;
                background.addChild(tripTree1);
                tripTree1s.push(tripTree1);
            }
            for (var i = 0; i < 8; i++) {
                var blueGrass1 = draw.bitmap("img/blueGrass.png");
                blueGrass1.x = 250 * i;
                blueGrass1.y = groundY - 120;
                blueGrass1.scaleX = .25;
                blueGrass1.scaleY = .25;
                background.addChild(blueGrass1);
                blueGrasses1.push(blueGrass1);
            }
            // END OF LAYER ONE //
            
            // START OF LAYER TWO //
            for (var i = 0; i < 10; i++) {
                var blueGrass2t = draw.bitmap("img/blueGrass.png");
                blueGrass2t.x = 250 * i - 125;
                blueGrass2t.y = groundY - 100;
                blueGrass2t.scaleX = .20;
                blueGrass2t.scaleY = .20;
                background.addChild(blueGrass2t);
                blueGrasses2t.push(blueGrass2t);
            }
            for (var i = 0; i < 8; i++) {
                var tripTree2 = draw.bitmap("img/triptree2.png");
                tripTree2.x = 250 * i;
                tripTree2.y = groundY - 370;
                tripTree2.scaleX = .40;
                tripTree2.scaleY = .40;
                background.addChild(tripTree2);
                tripTree2s.push(tripTree2);
            }
            for (var i = 0; i < 7; i++) {
                var blueGrass2 = draw.bitmap("img/blueGrass.png");
                blueGrass2.x = 250 * i;
                blueGrass2.y = groundY - 95;
                blueGrass2.scaleX = .20;
                blueGrass2.scaleY = .20;
                background.addChild(blueGrass2);
                blueGrasses2.push(blueGrass2);
            }
           
            // END OF LAYER TWO //
            
            // START OF LAYER THREE //
            for (var i = 0; i < 10; i++) {
                var blueGrass3t = draw.bitmap("img/blueGrass.png");
                blueGrass3t.x = 250 * i + 310;
                blueGrass3t.y = groundY - 90;
                blueGrass3t.scaleX = .20;
                blueGrass3t.scaleY = .20;
                background.addChild(blueGrass3t);
                blueGrasses3t.push(blueGrass3t);
            }
            var backgroundThree = draw.rect(canvasWidth, groundY, '#36854b');
            backgroundThree.y = groundY - 40;
            background.addChild(backgroundThree);

            for (var i = 0; i < 8; i++) {
                var tripTree3 = draw.bitmap("img/triptree3.png");
                tripTree3.x = 250 * i;
                tripTree3.y = groundY - 275;
                tripTree3.scaleX = .30;
                tripTree3.scaleY = .30;
                background.addChild(tripTree3);
                tripTree3s.push(tripTree3);
            }
            for (var i = 0; i < 8; i++) {
                var blueGrass3 = draw.bitmap("img/blueGrass.png");
                blueGrass3.x = 250 * i + 180;
                blueGrass3.y = groundY - 70;
                blueGrass3.scaleX = .20;
                blueGrass3.scaleY = .20;
                background.addChild(blueGrass3);
                blueGrasses3.push(blueGrass3);
            }
            // END OF LAYER THREE //
            
            // START OF LAYER FOUR //
            for (var i = 0; i < 7; i++) {
                var blueGrass4t = draw.bitmap("img/blueGrass.png");
                blueGrass4t.x = 250 * i + 310;
                blueGrass4t.y = groundY - 65;
                blueGrass4t.scaleX = .20;
                blueGrass4t.scaleY = .20;
                background.addChild(blueGrass4t);
                blueGrasses4t.push(blueGrass4t);
            }
            for (var i = 0; i < 8; i++) {
                var tripTree4 = draw.bitmap("img/triptree4.png");
                tripTree4.x = 250 * i;
                tripTree4.y = groundY - 250;
                tripTree4.scaleX = .30;
                tripTree4.scaleY = .30;
                background.addChild(tripTree4);
                tripTree4s.push(tripTree4);
            } 
            var backgroundFour = draw.rect(canvasWidth, groundY, '#5d9cb3');
            backgroundFour.y = groundY - 20;
            background.addChild(backgroundFour);
          
            for (var i = 0; i < 8; i++) {
                var blueGrass4 = draw.bitmap("img/blueGrass.png");
                blueGrass4.x = 250 * i + 160;
                blueGrass4.y = groundY - 65;
                blueGrass4.scaleX = .25;
                blueGrass4.scaleY = .20;
                background.addChild(blueGrass4);
                blueGrasses4.push(blueGrass4);
            }
            for (var i = 0; i < 8; i++) {
                var blueGrass4td = draw.bitmap("img/blueGrass.png");
                blueGrass4td.x = 250 * i + 310;
                blueGrass4td.y = groundY - 45;
                blueGrass4td.scaleX = .20;
                blueGrass4td.scaleY = .15;
                background.addChild(blueGrass4td);
                blueGrasses4td.push(blueGrass4td);
            }
            var road = draw.rect(canvasWidth, 20, 'yellow');
            road.y = groundY - 10;
            background.addChild(road);
            // END OF LAYER FOUR //

            
            // TODO 3: Part 1 - Add a tree
            // tree = draw.bitmap("img/tree.png");
            // tree.x = 250;
            // tree.y = groundY - 240;
            // background.addChild(tree);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            // tree.x -= 1;
            // if (tree.x < 0) {
            // tree.x = canvasWidth;
            // }
         
            // TODO 4: Part 2 - Parallax
            // LAYER ONE TREE // 
            for (var i = 0; i < tripTree1s.length; i++) {
                var tree1 = tripTree1s[i];
                var edge = tree1.x + 409.6; 
                tree1.x -= .5;
                if (edge < 0) {
                    tree1.x = canvasWidth;
                }
            }

            // LAYER TWO TREE //
            for (var i = 0; i < tripTree2s.length; i++) {
                var tree2 = tripTree2s[i];
                var edge = tree2.x + 409.6; 
                tree2.x -= 1;
                if (edge < 0) {
                    tree2.x = canvasWidth;
                }
            }

            // LAYER THREE TREE // 
            for (var i = 0; i < tripTree3s.length; i++) {
                var tree3 = tripTree3s[i];
                var edge = tree3.x + 409.6; 
                tree3.x -= 2;
                if (edge < 0) {
                    tree3.x = canvasWidth;
                }
            }

            // LAYER FOUR TREE //
            for (var i = 0; i < tripTree4s.length; i++) {
                var tree4 = tripTree4s[i];
                var edge = tree4.x + 409.6; 
                tree4.x -= 3;
                if (edge < 0) {
                    tree4.x = canvasWidth;
                }
            }

            // LAYER ONE GRASS //
            for (var i = 0; i < blueGrasses1.length; i++) {
                var blueG1 = blueGrasses1[i];
                var BgrassEdge = blueG1.x + 200; 
                blueG1.x -= .5;
                if (BgrassEdge < 0) {
                    blueG1.x = canvasWidth;
                }
            }
            for (var i = 0; i < blueGrasses1t.length; i++) {
                var blueG1t = blueGrasses1t[i];
                var BgrassEdge = blueG1t.x + 200; 
                blueG1t.x -= .5;
                if (BgrassEdge < 0) {
                    blueG1t.x = canvasWidth;
                }
            }


            // LAYER TWO GRASS //
            for (var i = 0; i < blueGrasses2.length; i++) {
                var blueG2 = blueGrasses2[i];
                var BgrassEdge = blueG2.x + 142; 
                blueG2.x -= 1;
                if (BgrassEdge < 0) {
                    blueG2.x = canvasWidth;
                }
            }
            for (var i = 0; i < blueGrasses2t.length; i++) {
                var blueG2t = blueGrasses2t[i];
                var BgrassEdge = blueG2t.x + 142; 
                blueG2t.x -= 1;
                if (BgrassEdge < 0) {
                    blueG2t.x = canvasWidth;
                }
            }

            // LAYER THREE GRASS //
            for (var i = 0; i < blueGrasses3.length; i++) {
                var blueG3 = blueGrasses3[i];
                var BgrassEdge = blueG3.x + 160; 
                blueG3.x -= 2;
                if (BgrassEdge < 0) {
                    blueG3.x = canvasWidth;
                }
            }
            for (var i = 0; i < blueGrasses3t.length; i++) {
                var blueG3t = blueGrasses3t[i];
                var BgrassEdge = blueG3t.x + 160; 
                blueG3t.x -= 2;
                if (BgrassEdge < 0) {
                    blueG3t.x = canvasWidth;
                }
            }

            // LAYER FOUR GRASS //
            for (var i = 0; i < blueGrasses4.length; i++) {
                var blueG4 = blueGrasses4[i];
                var BgrassEdge = blueG4.x + 160; 
                blueG4.x -= 3;
                if (BgrassEdge < 0) {
                    blueG4.x = canvasWidth;
                }
            }
            for (var i = 0; i < blueGrasses4t.length; i++) {
                var blueG4t = blueGrasses4t[i];
                var BgrassEdge = blueG4t.x + 160; 
                blueG4t.x -= 3;
                if (BgrassEdge < 0) {
                    blueG4t.x = canvasWidth;
                }
            }
            for (var i = 0; i < blueGrasses4td.length; i++) {
                var blueG4td = blueGrasses4td[i];
                var BgrassEdge = blueG4td.x + 160; 
                blueG4td.x -= 3;
                if (BgrassEdge < 0) {
                    blueG4td.x = canvasWidth;
                }
            }
            
           
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
