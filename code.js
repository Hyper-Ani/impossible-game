var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b3aac6c4-272c-458c-828c-c64d9fb69d0d","022c75f4-de57-4dd7-9c45-c3109ca4a3d3","b7720071-f3fe-41fe-a7bd-93749e02bad6","51c83556-5d98-4023-93ee-ff7e89757a55","2521c09f-144e-4ce8-be7a-946666847c59"],"propsByKey":{"b3aac6c4-272c-458c-828c-c64d9fb69d0d":{"name":"alienBlue_walk_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png","frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":2,"version":"ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ELZYpE7d5194Fj1d4Cp5B80PiWqbXZuq/category_characters/alienBlue_walk.png"},"022c75f4-de57-4dd7-9c45-c3109ca4a3d3":{"name":"spike_bot_walk_1","sourceUrl":null,"frameSize":{"x":122,"y":161},"frameCount":2,"looping":true,"frameDelay":12,"version":"uxsialQAqpV_JfimCoeeakFRwulWtTiV","categories":["characters"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":161},"rootRelativePath":"assets/022c75f4-de57-4dd7-9c45-c3109ca4a3d3.png"},"b7720071-f3fe-41fe-a7bd-93749e02bad6":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"dsOy2dnLtMPuSR4HPUSSXEbxUefg1ZiX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b7720071-f3fe-41fe-a7bd-93749e02bad6.png"},"51c83556-5d98-4023-93ee-ff7e89757a55":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png"},"2521c09f-144e-4ce8-be7a-946666847c59":{"name":"flat_medal4_1","sourceUrl":"assets/api/v1/animation-library/gamelab/a8wIMuD.ymkUT6qJA1HySF41WJTD902A/category_gameplay/flat_medal4.png","frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":2,"version":"a8wIMuD.ymkUT6qJA1HySF41WJTD902A","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a8wIMuD.ymkUT6qJA1HySF41WJTD902A/category_gameplay/flat_medal4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var runner = createSprite(0, 0, 20,20);
runner.setAnimation("spike_bot_walk_1");
runner.scale = 0.35;
runner.shapeColor = "turquoise";

var o1 = createSprite(6, 132, 10, 150);
o1.velocityX = 4;


var o2 = createSprite(396, 285, 10, 150);
o2.velocityX = -4;

var c1 = createSprite(100, 100, 20, 20);
c1.setAnimation("coin_gold_1");
c1.scale = 0.45;
var c1 = createSprite(200, 100, 20, 20);
c1.setAnimation("coin_gold_1");
c1.scale = 0.45;
var c1 = createSprite(300, 100, 20, 20);
c1.setAnimation("coin_gold_1");
c1.scale = 0.45;
var c1 = createSprite(100, 200, 20, 20);
c1.setAnimation("coin_gold_1");
c1.scale = 0.45;
var c1 = createSprite(100, 300, 20, 20);
c1.setAnimation("coin_gold_1");
c1.scale = 0.45;
var c1 = createSprite(200, 200, 20, 20);
c1.setAnimation("coin_gold_1");
c1.scale = 0.45;
var c1 = createSprite(300, 200, 20, 20);
c1.setAnimation("coin_gold_1");
c1.scale = 0.45;
var c1 = createSprite(200, 300, 20, 20);
c1.setAnimation("coin_gold_1");
c1.scale = 0.45;
var c1 = createSprite(300, 300, 20, 20);
c1.setAnimation("coin_gold_1");
c1.scale = 0.45;


var endp = createSprite(26, 368, 15, 12);
endp.setAnimation("flat_medal4_1");






var coins = 0;





playSound("assets/category_background/jazzy_beats.mp3", false);




function draw() {
  createEdgeSprites();
  background("darkgreen");
  o1.bounceOff(rightEdge);
  o1.bounceOff(leftEdge);
  o2.bounceOff(rightEdge);
  o2.bounceOff(leftEdge);
  runner.bounceOff(edges);
  
   text("coins:"+coins, 156, 80);
  
  if (keyDown(RIGHT_ARROW)) {
    runner.velocityX = 4;
  }
  if (keyDown(LEFT_ARROW)) {
    runner.velocityX = -4;
  }
  if (keyDown(DOWN_ARROW)) {
    runner.velocityY = 4;
  }
  if (keyDown(UP_ARROW)) {
    runner.velocityY = -4;
  }
  
  if (runner.isTouching(o1)) {
    runner.x = 0;
    runner.y = 0;
    
  }
  if (runner.isTouching(o2)) {
    runner.x = 0;
    runner.y = 0;
    
  }
 
  
  if (runner.isTouching(endp)) {
    textSize(30);
    stroke("red");
    
    
    text("YOU WON!!!", 200, 200);
    
  }
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
