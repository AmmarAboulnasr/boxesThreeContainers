'use strict';

$(document).ready(init);

function init() {
	console.log("ready!");
	$("#getColor").on("click", getColor);
	$("#randomColor").on("click", getRandomColor);
  $("#firstContainer").on("click", ".box", boxClicked);
  $("#secondContainer").on("click", ".box", boxClicked);
  $("#thirdContainer").on("click", ".box", boxClicked);
  $("#firstContainer").click(moveBox);
  $("#secondContainer").click(moveBox);
  $("#thirdContainer").click(moveBox);
  // $("#secondContainer").click(moveBoxToSecond);
  // $("#thirdContainer").click(moveBoxToThird);
 
}

function moveBox() {
  console.log("You clicked on the second container");
  $(this).append($(".selected").detach());
  // $("#firstContainer").append($(".selected").detach());
  $("*").removeClass("selected");
}

// function moveBoxToSecond() {
//   console.log("You clicked on the second container");
//   $("#secondContainer").append($(".selected").detach());
//   $("*").removeClass("selected");
// }

// function moveBoxToThird() {
//   console.log("You clicked on the third container");
//   $("#thirdContainer").append($(".selected").detach());
//   $("*").removeClass("selected");
// }

function boxClicked(event) {
  event.stopPropagation();
  var $selectedBox = $(event.target);
  console.log("you clicked", $selectedBox);
  if($selectedBox.hasClass("selected")) {
    $selectedBox.removeClass("selected");
  } else {
    $("*").removeClass("selected");
    $selectedBox.addClass("selected");
  }

  
}

function getColor() {
	var color = $("#colorInput").val();
	console.log(color);

	var $box = $("<div>");
	$box.addClass("box");
	$box.css("background-color", color);
	$("#firstContainer").append($box);

}

function getRandomColor() {
	var colorArr = [];
	for(var i = 0; i < 3; i++) {
		colorArr[i] = Math.floor((Math.random()*255))
	}
	var $box = $("<div>");
	$box.addClass("box");
	$box.css("background-color", "rgb("+colorArr[0]+","+colorArr[1]+","+colorArr[2]+")");
	$("#firstContainer").append($box);



}