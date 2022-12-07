
const left_button = document.getElementById('btn-left');
const right_button = document.getElementById('btn-right');

const locations_menu = document.getElementById('locations-menu-id');
const locations_ul = document.getElementById('locations-id');

const departments_menu = document.getElementById('departments-menu-id');
const departments_ul = document.getElementById('departments-id');

const images = [
  document.getElementById('image-0'),
  document.getElementById('image-1'),
  document.getElementById('image-2'),
  document.getElementById('image-3'),
  document.getElementById('image-4')
];

let paths = [
  'img/bunny2_hurt.png',
  'img/bunny2_jump.png',
  'img/bunny2_ready.png',
  'img/bunny2_stand.png',
  'img/bunny2_walk1.png'
];

function registerHandlers() {
  left_button.onclick = () => {
    paths = shiftIdxLeft(paths);
    source_Images();
  }

  right_button.onclick = () => {
    paths = shiftIdxRight(paths);
    source_Images();
  }

  locations_menu.onmouseover = () => {
    locations_ul.style.display = 'block';
  }

  locations_menu.onmouseout = () => {
    hideLocationsMenu();
  }

  departments_menu.onmouseover = () => {
    departments_ul.style.display = 'block';
  }

  departments_menu.onmouseout = () => {
    hideDepartmentMenu();
  }
}

function hideLocationsMenu(){
  locations_ul.style.display = 'none';
}

function hideDepartmentMenu(){
  departments_ul.style.display = 'none';
}

function source_Images(){
  let counter = 0;
  images.forEach(e => {
    e.src = paths[counter];
    counter++;
  });
}

// shifts contents of array to left
function shiftIdxLeft(arr){
  let tmp = []; // create a temp array
  tmp.push(arr[arr.length -1]); // capture the last element of the array

  // iter through array and push the rest of the elements except the last
  for(let i = 0; i < arr.length - 1; i++){
    tmp.push(arr[i]);
  };

  // return the temp array with the shifted values
  return tmp;
}

// shifts contents of array to right
function shiftIdxRight(arr){
  let tmp = [];
  let first_element = arr[0];

  for(let i = 1; i < arr.length; i++){
    tmp.push(arr[i]);
  };

  tmp.push(first_element);
  return tmp;
}

registerHandlers();
source_Images();

