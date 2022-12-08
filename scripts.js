import { createControls } from "./js/imageslider.js";

const locations_menu = document.getElementById('locations-menu-id');
const locations_ul = document.getElementById('locations-id');

const departments_menu = document.getElementById('departments-menu-id');
const departments_ul = document.getElementById('departments-id');

let paths = [
  'img/bunny2_hurt.png',
  'img/bunny2_jump.png',
  'img/bunny2_ready.png',
  'img/bunny2_stand.png',
  'img/bunny2_walk1.png'
];

function registerHandlers() {
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



registerHandlers();
createControls(paths, 'slider-container', true);


