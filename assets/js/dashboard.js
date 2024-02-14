
//add active class to element if be in page 
document.addEventListener("DOMContentLoaded", function() {
  // Get the current page URL
  var currentPageUrl = window.location.href;

  // Get all sidebar links
  var sidebarLinks = document.querySelectorAll('.background-active');

  // Loop through each sidebar link
  sidebarLinks.forEach(function(link) {
      // Get the link's href attribute
      var linkHref = link.getAttribute('href');
      
      // Check if the current page URL matches the link's href attribute
      if (currentPageUrl.includes(linkHref)) {
          // Add the active class to the link
          link.classList.add('active');
      }
  });
});

//add class active to control becouse hide add category ,add ....
document.addEventListener("DOMContentLoaded", function() {
  var controlItem = document.getElementById('controlItem');
  var control = document.querySelector('.control');

  controlItem.addEventListener('click', function() {
      // Toggle the display of the control class
      if (control.style.display === 'none') {
          control.style.display = 'block';
      } else {
          control.style.display = 'none';
      }
  });
});

// =====================================
// selected input 
// =====================================

//submit form when inter value in input "veiw per page" 
function submitForm(formId) {
  document.getElementById(formId).submit();
}

function setupSectionCheckbox(parentCheckboxId, authorCheckboxClass, controlsId, editButtonId, textSelect) {
  // Select all rows and show buttons  
  document.getElementById(parentCheckboxId).addEventListener('change', function () {
    var authorCheckboxes = document.getElementsByClassName(authorCheckboxClass);
    for (var i = 0; i < authorCheckboxes.length; i++) {
      authorCheckboxes[i].checked = this.checked;
    }
    // Show buttons when checking all rows
    var controls = document.getElementById(controlsId);
    var buttonEdit = document.getElementById(editButtonId);
    buttonEdit.style.display = onlyOneAuthorChecked() ? 'block' : 'none';
    controls.style.display = anyAuthorChecked() ? 'table-cell' : 'none'; // Show controls if any author is checked
    updateAuthorCount();
  });

  // When check all rows, parentCheckBox checked  
  var authorCheckboxes = document.getElementsByClassName(authorCheckboxClass);
  for (var i = 0; i < authorCheckboxes.length; i++) {
    authorCheckboxes[i].addEventListener('change', function () {
      // Show buttons when checking all rows
      var controls = document.getElementById(controlsId);
      var buttonEdit = document.getElementById(editButtonId);
      buttonEdit.style.display = onlyOneAuthorChecked() ? 'block' : 'none';
      controls.style.display = anyAuthorChecked() ? 'table-cell' : 'none'; // Show controls if any author is checked
      updateAuthorCount();

      // Update parentCheckBox checkbox state
      document.getElementById(parentCheckboxId).checked = allAuthorsChecked();
    });
  }

  // Function to check if any author checkbox is checked  
  function anyAuthorChecked() {
    var authorCheckboxes = document.getElementsByClassName(authorCheckboxClass);
    for (var i = 0; i < authorCheckboxes.length; i++) {
      if (authorCheckboxes[i].checked) {
        return true;
      }
    }
    return false;
  }

  // Function to check if all author checkboxes are checked  
  function allAuthorsChecked() {
    var authorCheckboxes = document.getElementsByClassName(authorCheckboxClass);
    for (var i = 0; i < authorCheckboxes.length; i++) {
      if (!authorCheckboxes[i].checked) {
        return false;
      }
    }
    return true;
  }

  // Function to check if only one author checkbox is checked  
  function onlyOneAuthorChecked() {
    var checkedCount = 0;
    var authorCheckboxes = document.getElementsByClassName(authorCheckboxClass);
    for (var i = 0; i < authorCheckboxes.length; i++) {
      if (authorCheckboxes[i].checked) {
        checkedCount++;
      }
    }
    return checkedCount === 1;
  }

  // Additional event listener to update count when any author checkbox changes state  
  var authorCheckboxes = document.getElementsByClassName(authorCheckboxClass);
  for (var i = 0; i < authorCheckboxes.length; i++) {
    authorCheckboxes[i].addEventListener('change', function () {
      updateAuthorCount();
    });
  }

  // Function to update the count of selected authors  
  function updateAuthorCount() {
    var checkedCount = document.querySelectorAll('input[class="' + authorCheckboxClass + '"]:checked').length;
    document.getElementById(textSelect).textContent = checkedCount + " selected";
  }
}

// Call the function for each section with specific parameters
setupSectionCheckbox('parentCheckboxCourses', 'authorCheckboxCourses', 'controlCourses', 'editButtonCourses','textSelectCourses');
setupSectionCheckbox('parentCheckboxCategory', 'authorCheckboxCategory', 'controlCategory', 'editButtonCategory','textSelectCategory');
setupSectionCheckbox('parentCheckboxSetion', 'authorCheckboxSetion', 'controlSetion', 'editButtonSetion','textSelectSetion');
setupSectionCheckbox('parentCheckboxLecture', 'authorCheckboxLecture', 'controlLecture', 'editButtonLecture','textSelectLecture');
setupSectionCheckbox('parentCheckboxUser', 'authorCheckboxUser', 'controlUser', 'editButtonUser','textSelectUser');
// Add more calls for other sections if needed



//change color span status when textContent changes
var statuses = document.getElementsByClassName("status-text");
for (var i = 0; i < statuses.length; i++) {
  var content = statuses[i].textContent.trim().toLowerCase();

  if (content === "available") {
    statuses[i].classList.add("bg-light-success", "text-success");
  }
  else if (content === "completed") {
    statuses[i].classList.add("bg-light-primary", "text-primary");
  } else if (content === "deactivated") {
    statuses[i].classList.add("bg-light-danger", "text-danger");
  } else if (content === "upcoming") {
    statuses[i].classList.add("bg-light-warning", "text-warning");
  }
}

//change color input status when selected 
var selectElement = document.getElementById("status-select");
var selectClass = 'select-input-status ';
var options = selectElement.options;
for (var i = 0; i < options.length; i++) {
  if (options[i].value == 'available' && options[i].selected == true) {
    selectElement.className = selectClass + 'badge bg-light-success rounded-pill text-success px-3 py-2 fs-3 text-center';
  }
  else if (options[i].value == 'upcoming' && options[i].selected == true) {
    selectElement.className = selectClass + 'badge bg-light-warning rounded-pill text-warning px-3 py-2 fs-3 text-center';
  }
  else if (options[i].value == 'deactivated' && options[i].selected == true) {
    selectElement.className = selectClass + 'badge bg-light-danger rounded-pill text-danger px-3 py-2 fs-3 text-center';
  }
  else if (options[i].value == 'completed' && options[i].selected == true) {
    selectElement.className = selectClass + 'badge bg-light-primary rounded-pill text-primary px-3 py-2 fs-3 text-center';
  }
}
