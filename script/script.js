// heart icon
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

// copy icon
let copyCount = document.getElementById("copy-count");
let copyIcon = document.querySelectorAll(".emergency-services-section .copy");

for (const icon of copyIcon) {
  icon.addEventListener("click", function () {
    console.log("copy");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
  });
}

let calls = document.querySelectorAll(".emergency-services-section .call");
const callListContainer = document.getElementById("call-list-container");

for (const call of calls) {
  call.addEventListener("click", function () {
    const card = this.closest(".emergency-services-section .card");
    const cardTitle = card.querySelector(".card-title").innerText;
    const cardNumber = card.querySelector(".number").innerText;
    // alert
    alert(`You are calling to ${cardTitle}, Number: ${cardNumber}`);
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
    // Get current time
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    listItem.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <h3 class="font-bold text-xl mb-2">${cardTitle}</h3>
          <p class="text-lg text-gray-700">${cardNumber}</p>
        </div>
        <div>
          <p class="text-sm text-gray-500 mt-1">${timeString}</p>
        </div>
      </div>
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
