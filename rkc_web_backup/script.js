let lineIconDiv = document.querySelector('#line-icon');
let navlinkDiv = document.querySelector('#navlink-div');

// event listener to expand/hide navbar
lineIconDiv.addEventListener('click', (e) => {
  if (navlinkDiv.style.display === '') {
    navlinkDiv.style.display = 'block';
  } else {
    navlinkDiv.style.display = '';
  }
})

// collapse navbar after selection
navlinkDiv.addEventListener('click', () => {
  navlinkDiv.style.display = '';
})