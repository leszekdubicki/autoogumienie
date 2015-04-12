//functions and variables I've created for my webpage
//Web design project and web page for autoogumienie company
//Author: Leszek Dubicki (student id: x14125439)*/
//

//get position and size of element, needed for manipulating boxes with services
function getPosX(el) {
    var x = el.offsetLeft;
    return x;
}

function getPosY(el) {
    var y = el.offsetTop;
    return y;
}

function getWidth(el) {
    var w = el.offsetWidth;
    return w;
}

function getHeight(el) {
    var h = el.offsetHeight;
    return h;
}
var presentationTop = 10; //my target to put service box after animation
var presentationLeft = 10; //my terget to put service box after animation
var presentationWidth = 880; //my terget to expand service box ager animation
var presentationHeight = 270; //my terget to expand service box ager animation

//read positions of each service boxes placed in services tab (at the beginning)
var left1 =  getPosX(document.getElementById('serv1'));
var left2 =  getPosX(document.getElementById('serv2'));
var left3 =  getPosX(document.getElementById('serv3'));
var left4 =  getPosX(document.getElementById('serv4'));
var lefts = [left1, left2, left3, left4];
var topOfBoxes = getPosY(document.getElementById('serv1'));
var widthOfBoxes = getWidth(document.getElementById('serv1'));
var heightOfBoxes = getHeight(document.getElementById('serv1'));

//munction to traverse through all the service boxes and collapse the one that is presented currently and expand desired one
function moveServBox(boxToMoveNo){
    boxToMoveId = "serv".concat(boxToMoveNo.toString());
    //look for all the boxes if they are not expanded
    for (i=1; i<=4; i++){
        boxId = "serv".concat(i.toString());
        if (getWidth(document.getElementById(boxId)) != widthOfBoxes){
            //resize the box back to original size :)
            $("#".concat(boxId)).animate({"width": widthOfBoxes.toString().concat("px")},"fast")
        }
        if (getHeight(document.getElementById(boxId)) != heightOfBoxes){
            //resize the box back to original size :)
            $("#".concat(boxId)).animate({"height": heightOfBoxes.toString().concat("px")},"fast")
        }
        if (getPosX(document.getElementById(boxId)) != lefts[i-1]){
            //move the box back to where it belong :)
            $("#".concat(boxId)).animate({"left": lefts[i-1].toString().concat("px")},"fast")
        }
        if (getPosY(document.getElementById(boxId)) != topOfBoxes){
            //move the box back to where it belong :)
            $("#".concat(boxId)).animate({"top": topOfBoxes.toString().concat("px")},"fast")
        }
        //document.getElementById(boxId).innerHTML = getPosY(document.getElementById("serv1"));
    }
    //move the right box this time:
    $("#".concat(boxToMoveId)).animate({"top": presentationTop.toString().concat("px")},"fast")
    $("#".concat(boxToMoveId)).animate({"left": presentationLeft.toString().concat("px")},"fast")
    $("#".concat(boxToMoveId)).animate({"width": presentationWidth.toString().concat("px")},"fast")
    $("#".concat(boxToMoveId)).animate({"height": presentationHeight.toString().concat("px")},"fast")

    //return boxId;
}



