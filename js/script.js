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

  // Change Relocation Date
  const kharkivRelocationDate = new Date("2003-08-26");
  const todaysDate = new Date();
  var monthsLivingInKharkiv = todaysDate.getMonth() - kharkivRelocationDate.getMonth() + (12 * (todaysDate.getFullYear() - kharkivRelocationDate.getFullYear()));
  document.getElementById("kharkiv-rent-months").innerHTML = `paid ${monthsLivingInKharkiv} month ${(monthsLivingInKharkiv === 1 ? "" : "s")} of rent already`;

  // Play audio
  document.getElementById("meh").addEventListener("click", function () {
    this.childNodes[3].play();
  });
});