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
/* 
let calls = document.querySelectorAll(".emergency-services-section .call");
for (const call of calls) {
  call.addEventListener("click", function () {
    console.log("hello");
  });
}
 */

let calls = document.querySelectorAll(".emergency-services-section .call");

const callListContainer = document.getElementById("call-list-container");

for (const call of calls) {
  call.addEventListener("click", function () {
    // star deduct
    let star = document.getElementById("star");
    let currentStar = parseInt(star.innerText);
    if (currentStar <= 0) {
      star.innerText = "0";
      return;
    }
    let newStar = currentStar - 20;
    if (newStar < 0) {
      newStar = 0;
    }
    star.innerText = newStar;
    // list item create
    let listItem = document.createElement("div");
    listItem.classList.add(
      "call-list-item",
      "mb-4",
      "p-4",
      "bg-gray-50",
      "rounded"
    );
    listItem.innerHTML = `
      <h3 class="font-bold text-xl mb-2">title</h3>
      <p class="text-lg text-gray-700">Number</p>
    `;
    // clear button event
    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", function () {
      callListContainer.innerHTML = "";
      star.innerText = 100;
    });

    callListContainer.appendChild(listItem);
  });
}
