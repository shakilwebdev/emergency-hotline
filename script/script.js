let heartIcon = document.querySelectorAll(
  ".emergency-services-section .fa-heart"
);

for (const icon of heartIcon) {
  icon.addEventListener("click", function () {
    console.log("jakala");
    let heartCount = document.getElementById("heart-count");
    heartCount.innerText = parseInt(heartCount.innerText) + 1;
  });
}
