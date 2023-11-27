function redirectToPage(form) {
  // Get the selected option from the dropdown
  let selectedOption = form.sweets.options[form.sweets.selectedIndex];

  // Check if the selected option's value is not an empty string
  if (selectedOption.value !== "") {
    // Redirect to the URL specified in the selected option's value
    window.location.href = selectedOption.value;
  }
}
