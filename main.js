// Dropdown button
document.getElementById('dropdownButton').addEventListener('click', function() {
  var dropdownContent = document.getElementById('dropdownContent');
  
  // Toggling the display of the dropdown content
  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
  } else {
    dropdownContent.style.display = 'block';
  }
});

// Add click event listeners to each dropdown option
var dropdownOptions = document.querySelectorAll('.dropdown-content a');
dropdownOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    // Get the selected option's text
    var selectedOption = option.getAttribute('data-option');
    
    // Updating the button's text with the selected option
    document.getElementById('dropdownButton').textContent = selectedOption;
    
    // Hiding the dropdown content
    document.getElementById('dropdownContent').style.display = 'none';
  });
});

// Closing the dropdown when clicking outside of it
window.onclick = function(event) {
  if (!event.target.matches('#dropdownButton')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === 'block') {
        openDropdown.style.display = 'none';
      }
    }
  }
};
