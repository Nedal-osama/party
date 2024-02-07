/// <reference types="../@types/jquery" />
"use strict";


$(function(){
   $(".loader").fadeOut(1500, function(){
      $("#lodingBage").slideUp(1000 , function(){
         $("body").css("overflow","auto")
      } )
   })
})



$(".menu").on("click", function () {
   $(".nav-menu").animate({ width: "250px" }, 300);
   $(".layer.home").animate({ marginLeft: "250px" }, 300);
});

$(".close").on("click", function () {
   $(".nav-menu").animate({ width: "0px" }, 400);
   $(".layer.home").animate({ marginLeft: "0px" }, 400);
});

$(".singer").on("click", function (e) {
   $(".lorem").not($(this).next()).slideUp(500);
   $(this).next().slideToggle(500);
});



window.onload = function () {
   counter("30 january 2024 ");
};

function counter(countTo) {
   let date = new Date(countTo);
   date = date.getTime() / 1000;

   let now = new Date();
   now = now.getTime() / 1000;
   let timeBetween = date - now;

   let days = Math.floor(timeBetween / (24 * 60 * 60));
   let hours = Math.floor((timeBetween - days * (24 * 60 * 60)) / 3600);
   let mins = Math.floor(
      (timeBetween - days * (24 * 60 * 60) - hours * 3600) / 60
   );
   let secs = Math.floor(
      timeBetween - days * (24 * 60 * 60) - hours * 3600 - mins * 60
   );
   $("#count .days").html(`${days} D`);
   $("#count .hours").html(`${hours} H`);
   $("#count .minutes").html(`${mins} M`);
   $("#count .seconds").html(`${secs} S`);

   setInterval(function () {
      counter(countTo);
   }, 1000);
}

let maxLength = 100;
$("textarea").keyup(function () {
   let length = $(this).val().length;
   let leftWords = maxLength - length;
   if (leftWords <= 0) {
      $(".number").text("You have exceeded the character limit");
   } else {
      $(".number").text(leftWords);
   }
});
