window.addEventListener("DOMContentLoaded", () => {
  // Change color
  const switchToColor = (color) => {
    try {
      document.querySelectorAll(".page").forEach((page) => {
        page.style.borderColor = color;
      });
      document.querySelectorAll(".avatar").forEach((avatar) => {
        avatar.contentDocument.getElementById("circle").setAttribute("fill", color);
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  document.getElementById("midnightblue").addEventListener("click", switchToColor.bind(this, "midnightblue"));
  document.getElementById("salmon").addEventListener("click", switchToColor.bind(this, "salmon"));


  // var lvivRelocationDate = new Date("2016-09-10");
  // var todaysDate = new Date();
  // var monthsLivingInLviv = todaysDate.getMonth() - lvivRelocationDate.getMonth() + (12 * (todaysDate.getFullYear() - lvivRelocationDate.getFullYear()));
  // document.getElementById("lviv-rent-months").innerHTML = "paid " + monthsLivingInLviv + " month" + (monthsLivingInLviv === 1 ? "" : "s") + " of rent already";
  // function switchToColor(color) {
  // 	try {
  // 		document.querySelectorAll(".page").forEach(function(page) {
  // 			page.style.borderColor = color;
  // 		});
  // 		document.querySelectorAll(".avatar").forEach(function(avatar) {
  // 			avatar.contentDocument.getElementById("circle").setAttribute("fill", color);
  // 		});
  // 	} catch (error) {}
  // }
  // document.getElementById("midnightblue").addEventListener("click", switchToColor.bind(this, "midnightblue"));
  // document.getElementById("chartreuse").addEventListener("click", switchToColor.bind(this, "chartreuse"));
  // document.getElementById("meh").addEventListener("click", function() {
  // 	this.childNodes[2].play();
  // });
  // function replaceNoscript(noscript) {
  // 	var parent = noscript.parentElement;
  // 	Array.prototype.slice.call((new DOMParser()).parseFromString(noscript.textContent, "text/html").body.children).forEach(function(element) {
  // 		parent.insertBefore(element, noscript);
  // 	});
  // 	parent.removeChild(noscript);
  // }
  // function callFuncOnCollection(collection, func) {
  // 	Array.prototype.slice.call(collection).map(function (item) {
  // 		func(item);
  // 	});
  // }
  // var childhoodPhotos = document.getElementById("childhood").getElementsByClassName("photos")[0];
  // document.getElementById("resume").addEventListener("click", function() {
  // 	callFuncOnCollection(childhoodPhotos.getElementsByTagName("NOSCRIPT"), replaceNoscript);
  // });
  // if (window.location.hash === "#childhood") {
  // 	callFuncOnCollection(childhoodPhotos.getElementsByTagName("NOSCRIPT"), replaceNoscript);
  // }
  // if ("serviceWorker" in navigator) {
  // 	window.addEventListener("load", function() {
  // 		navigator.serviceWorker.register('/sw.js');
  // 	});
  // }

});