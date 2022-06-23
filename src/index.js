console.log(data);

// WRITE YOUR CODE BELOW!
let mainSection = document.querySelector(".main__dog-section");

let dogImage = document.createElement("img");

let dogDiv = document.createElement("div");
dogDiv.className = "main__dog-section__desc";
let dogDivTitle = document.createElement("h3");
dogDivTitle.textContent = "Bio";
let dogDescText = document.createElement("p");
dogDiv.append(dogDivTitle, dogDescText);

let isNaughty = document.createElement("p");
let isNaughtyText = document.createElement("em");
isNaughtyText.textContent = "Is naughty?";
isNaughty.prepend(isNaughtyText);

let button = document.createElement("button");
button.className = "main__dog-section__btn";

button.addEventListener("click", () => {
  button.textContent =
    button.textContent === "Good dog!" ? "Bad dog!" : "Good dog!";
  isNaughty.textContent = button.textContent === "Good dog!" ? " yes!" : " no!";
  isNaughty.prepend(isNaughtyText);
});

let alreadySelectedDog = false;

for (let dog of data) {
  let listedDog = document.createElement("li");
  listedDog.className = "dogs-list__button";
  listedDog.textContent = dog.name;
  document.querySelector(".dogs-list").appendChild(listedDog);

  listedDog.addEventListener("click", selectedDog);
  function selectedDog() {
    console.log();
    if (!alreadySelectedDog) {
      document.querySelector(".main__dog-section > h2").textContent = dog.name;
      dogImage.src = dog.image;
      dogDescText.textContent = dog.bio;
      isNaughty.textContent = " yes!";
      isNaughty.prepend(isNaughtyText);
      button.textContent = "Good dog!";
      mainSection.append(dogImage, dogDiv, isNaughty, button);
    } else {
      document.querySelector(".main__dog-section > h2").textContent = dog.name;
      dogImage.src = dog.image;
      dogDescText.textContent = dog.bio;
      isNaughty.textContent = " yes!";
      isNaughty.prepend(isNaughtyText);
      button.textContent = "Good dog!";
    }
    alreadySelectedDog = true;
  }
}
