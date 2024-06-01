// 1. Get all the elements
const progress = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

// 2. Create a variable to keep track of the current active circle
let currentActive = 1;

// 3. Add event listeners to the next and prev buttons
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);
  update();
});

// 4. Create a function to update the DOM
const update = () => {
  // Loop through all the circles
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }

    // Update the progress bar
    const actives = document.querySelectorAll('.active');

    progress.style.width =
      ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // Disable or activate the buttons
    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  });
};
