let addButton = document.querySelector(".icon");
let deleteButtons = document.querySelectorAll(".delete");
let doButtons = document.querySelectorAll(".do");
let text = document.querySelector(".text-to-do");
let numbersOfDo = 0;
let doClass = document.querySelectorAll(".do");
let toDoList = document.querySelector(".to-do-list");

var input = document.querySelector(".input-field");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    addButton.click();
    // Trigger the button element with a click
  }
});

/*doButtons[numbersOfDo].addEventListener("click", function () {
  let x = document.createElement("div");
  x.classList.add("did");
  text.style.textDecoration = "line-through";
});*/

addButton.addEventListener("click", function () {
  if (document.querySelector("input").value == "") {
    document.querySelector("input").value = "";
  } else {
    let x = document.createElement("div");
    let text = document.createElement("p");
    let italic1 = document.createElement("i");
    let italic2 = document.createElement("i");
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    img1.src =
      "https://img.icons8.com/ios-filled/40/26e07f/microsoft-to-do-app.png";
    img2.src = "https://img.icons8.com/android/40/fa314a/trash.png";
    italic1.classList.add("icon");
    italic1.classList.add("do");
    italic2.classList.add("icon");
    italic2.classList.add("delete");
    italic1.appendChild(img1);
    italic2.appendChild(img2);

    text.textContent = document.querySelector("input").value;
    text.classList.add("text-to-do");

    toDoList.appendChild(x);
    x.classList.add("input-container");
    x.appendChild(text);
    x.appendChild(italic1);
    x.appendChild(italic2);
    document.querySelector("input").value = "";

    doButtons = document.querySelectorAll(".do");

    console.log(doButtons);

    doButtons[numbersOfDo].addEventListener("click", function () {
      text = document.querySelectorAll(".text-to-do");
      doClass = document.querySelectorAll(".do");
      x.classList.add("did");
      doClass = document.querySelectorAll(".do");

      text[numbersOfDo - 1].style.textDecoration = "line-through";
    });
    deleteButtons = document.querySelectorAll(".delete");
    deleteButtons[numbersOfDo].addEventListener("click", function () {
      x.remove();
      numbersOfDo--;
    });
    numbersOfDo += 1;
    console.log(numbersOfDo);
  }
});
