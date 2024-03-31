//grab our relevant dom elements
const list = document.querySelector("ul");
const input = document.querySelector("input");

let groceryList = [];

//so effectively it would probably make more sense to appendChild and removeChild directly however as this is an arrays exercise will work with the array

const addListItem = (event) => {
  //prevent page reload / default bahaviour
  event.preventDefault();
  //getting the value of the input from our form submit event
  const inputEl = event.target.elements["newListItem"];
  const text = inputEl.value;
  //don't add in empty grocery items
  if (!text) return;

  //create our new list item with relevant text and click handlers
  const newListItem = document.createElement("li");
  newListItem.innerText = text;
  newListItem.addEventListener("click", () => {
    removeListItem(text);
  });
  //push the list item onto the end of our array
  groceryList.push(newListItem);
  //now that the array is updated, we update the DOM and reset the input value
  updateDom();
  input.value = "";
};

//we remove the item in a non-mutating way.  We create a copy and assign the copied value with the grocery list filtered out.
const removeListItem = (itemText) => {
  groceryList = groceryList.filter((item) => item.innerText !== itemText);

  //we can also do this in the below mutating way.
  //   const indexNum = groceryList.findIndex(item => item.innerText === itemText);
  //   groceryList.splice(indexNum,1);

  //update our DOM
  updateDom();
};

const updateDom = () => {
  //cycle through our grocery list and append each li element onto the UL element
  list.innerHTML = "";
  groceryList.forEach((item) => list.appendChild(item));
};
