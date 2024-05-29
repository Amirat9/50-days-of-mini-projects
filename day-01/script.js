// NodeList of all the panel elements
const panels = document.querySelectorAll('.panel');

// Loop through all the panels and add an event listener to each panel
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

// Function to remove the active class from all the panels
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
