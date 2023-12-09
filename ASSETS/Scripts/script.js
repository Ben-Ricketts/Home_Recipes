// Section to allow user to pick a meal from the dropdown menu on pages such as sweets, beef etc BEGINS

function redirectToPage(form) {
  // Get the selected option from the dropdown
  let selectedOption = form.sweets.options[form.sweets.selectedIndex];

  // Check if the selected option's value is not an empty string
  if (selectedOption.value !== "") {
    // Redirect to the URL specified in the selected option's value
    window.location.href = selectedOption.value;
  }
}

// Section to allow user to pick a meal from the dropdown menu on pages such as sweets, beef etc ENDS

// meal planner section to allow user to add to list BEGINS
let listItems = document.querySelector(".list-item");
let inputValue = document.getElementById("meal-planner-input");

// Load the list from local storage on page load
window.onload = function () {
  loadListFromLocalStorage();
};

function addToList() {
  // Check if the input field is not empty
  if (inputValue.value.trim() !== "") {
    let newListItem = document.createElement("li");
    newListItem.innerText = inputValue.value;

    // Create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteListItem(newListItem);
    });

    // Append the delete button to the list item
    newListItem.appendChild(deleteButton);

    // Append the new list item to the list
    listItems.appendChild(newListItem);

    // Save the updated list to local storage
    saveListToLocalStorage();

    // Clear the input field
    inputValue.value = "";
  }
}

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key.toLowerCase() === "enter") {
    addToList();
  }
});

// meal planner section to allow user to add to list ENDS

// FUNCTION for saving listitems into storage BEGINS

function saveListToLocalStorage() {
  // Convert the list items to an array of strings
  let itemsArray = Array.from(listItems.children).map((item) => {
    // Exclude the delete button text
    return item.firstChild.nodeType === 3
      ? item.firstChild.nodeValue
      : item.innerText;
  });

  // Save the array to local storage
  localStorage.setItem("mealPlannerList", JSON.stringify(itemsArray));
}

function loadListFromLocalStorage() {
  // Retrieve the array from local storage
  let itemsArray = JSON.parse(localStorage.getItem("mealPlannerList")) || [];

  // Clear the existing list items
  listItems.innerHTML = "";

  // Populate the list with the items from local storage
  itemsArray.forEach((itemText) => {
    let newListItem = document.createElement("li");
    newListItem.innerText = itemText;

    // Create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteListItem(newListItem);
    });

    // Append the delete button to the list item
    newListItem.appendChild(deleteButton);

    // Append the new list item to the list
    listItems.appendChild(newListItem);
  });
}

// FUNCTION for saving listitems into storage ENDS

// FUNCTION for DELETING list item BEGINS (function is being called from the addToList function)

function deleteListItem(item) {
  let listItems = document.querySelector(".list-item");

  // Remove the item from the list
  listItems.removeChild(item);

  // Save the updated list to local storage
  saveListToLocalStorage();
}

// FUNCTION for DELETING list item BEGINS
