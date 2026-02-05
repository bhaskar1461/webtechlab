function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const numDisplay = document.getElementById("randomNumber");
  numDisplay.innerHTML = "";

  const newPara = document.createElement("p");
  newPara.textContent = "Random Number: " + randomNumber;

  numDisplay.appendChild(newPara);
}

function addItem() {
  const itemList = document.getElementById("itemList");

  const newItem = document.createElement("li");
  newItem.textContent = "Item " + (itemList.children.length + 1);

  itemList.appendChild(newItem);
}

function removeItem() {
  const itemList = document.getElementById("itemList");

  if (itemList.children.length > 0) {
    itemList.removeChild(itemList.lastElementChild);
  }
}
