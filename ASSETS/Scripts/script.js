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
let listItems = document.querySelector(".list-item"); // Use the correct selector for the list items
let inputValue = document.getElementById("meal-planner-input"); // Use the correct selector for the input field

function addToList() {
  let newListItem = document.createElement("li");
  newListItem.innerText = inputValue.value;

  listItems.appendChild(newListItem);

  // Clear the input field
  inputValue.value = "";
}
