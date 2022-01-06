var dragon = document.createElement("img");
var dragonIdleImageNumber = 1;
var dragonIdleAnimationNumber = 0;
var dragonIdleStatus = false;

var score = 0;
var scoreTag;
var object = document.createElement("div");

function dragon_game_start() {
    var btn = document.getElementById("btn-dragon-game-start");
    btn.remove();

    scoreTag = document.createElement("h1");
    scoreTag.className = "score";
    scoreTag.innerHTML = "0";
    box.appendChild(scoreTag);

    object.className = "object";
    object.id = "object";
    box.appendChild(object);



    dragonIdleAnimationNumber = setInterval(dragon_Idle, 150);

}

function dragon_Idle() {
    dragonIdleStatus = true;
    dragonJumpStatus = false;
    dragon.className = "dragon";
    dragonIdleImageNumber = dragonIdleImageNumber + 1;
    dragon.src = "dragon/Idle (" + dragonIdleImageNumber + ").png";
    if (dragonIdleImageNumber == 10) {

        dragonIdleImageNumber = 1;
    }
    box.appendChild(dragon);

}
var key;

function keyReader(event) {
    key = event.which;
    //  alert(key);
    if (key == 38) {
        dragonRunAnimationStart();
        clearInterval(dragonIdleAnimationNumber);
        dragonIdleStatus = false;
    }

    if (key == 32) {
        dragonJumpAnimationStart();

    }



}
var dragonRunImageNumber = 1;
var dragonRunAnimationNumber = 0;
var dragonRunStatus = false;

function dragonRunAnimationStart() {

    if (dragonRunStatus == false) {
        dragonRunAnimationNumber = setInterval(dragonRunAnimation, 200);
        dragonRunStatus = true;

    }

}

function dragonRunAnimation() {
    objectAnimationStart();
    score = score + 10;
    scoreTag.innerHTML = score;
    dragonRunImageNumber = dragonRunImageNumber + 1;
    dragon.src = "dragon/Run (" + dragonRunImageNumber + ").png";
    if (dragonRunImageNumber == 8) {

        dragonRunImageNumber = 1;

    }
    box.appendChild(dragon);
}

var objectMarginLeft = 90;
var objectStatus = false;
var objectAnimationNumber = 0;

function objectAnimationStart() {

    if (objectStatus == false) {
        objectAnimationNumber = setInterval(objectAnimation, 200);
        objectStatus = true;
    }


}

var dragonDeadAnimationNumber = 0;

function objectAnimation() {

    objectMarginLeft = objectMarginLeft - 2;
    object.style.marginLeft = objectMarginLeft + "%";



    if (objectMarginLeft <= -76 & objectMarginLeft >= -90) {

        if (dragonMarginTop > -8) {

            clearInterval(dragonRunAnimationNumber);
            //   dragonRunStatus = false;
            clearInterval(dragonJumpAnimationNumber);
            //  dragonJumpStatus = false;
            clearInterval(objectAnimationNumber);
            dragonDeadAnimationStart();

        }


    }



}
var dragonJumpImageNumber = 1;
var dragonJumpStatus = false;
var dragonJumpAnimationNumber = 0;


function dragonJumpAnimationStart() {
    clearInterval(dragonRunAnimationNumber);
    clearInterval(dragonIdleAnimationNumber);
    dragonRunStatus = false;
    dragonIdleStatus = false;
    if (dragonJumpStatus == false) {
        dragonJumpAnimationNumber = setInterval(dragonJumpAnimation, 150);
        dragonJumpStatus = true;
    }

}
var dragonMarginTop = 0;

function dragonJumpAnimation() {

    dragonJumpImageNumber = dragonJumpImageNumber + 1;
    if (dragonJumpImageNumber <= 6) {
        dragonMarginTop = dragonMarginTop - 4;

        dragon.style.marginTop = dragonMarginTop + "%";

    } else {
        dragonMarginTop = dragonMarginTop + 4;
        dragon.style.marginTop = dragonMarginTop + "%";

    }
    if (dragonJumpImageNumber == 12) {

        dragonJumpImageNumber = 1;
        clearInterval(dragonJumpAnimationNumber);
        dragonRunAnimationNumber = setInterval(dragonRunAnimation, 200);
        dragonRunStatus = true;
        dragonJumpStatus = false;
        dragonMarginTop = dragon.style.marginTop = 0;

    }
    dragon.src = "dragon/Jump (" + dragonJumpImageNumber + ").png";

}

var dragonDeadImageNumber = 0;





function dragonDeadAnimation() {
    dragonDeadImageNumber = dragonDeadImageNumber + 1;
    dragon.src = "dragon/Dead (" + dragonDeadImageNumber + ").png";
    if (dragonDeadImageNumber == 8) {
        clearInterval(dragonDeadAnimationNumber);
        //clearInterval(objectAnimationNumber);
        //  objectStatus = false;
    }
}

function dragonDeadAnimationStart() {
    dragonDeadAnimationNumber = setInterval(dragonDeadAnimation, 200);
}