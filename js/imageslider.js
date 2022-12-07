const buttonStyles = `
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;

let images = [];  // contains image controls
let paths = []; // contains paths for images

function createControls(paths, containerName){
  const container = document.getElementById(containerName);
  this.paths = paths;

  //create overall slider control 
  let slider = document.createElement('div'); 
  slider.classList.add('slider-control');

  // create and style left button and append to control so it is the 1st element < img img IMG img img >
  let leftButton = document.createElement('button');
  leftButton.onclick = () => {
    images = shiftIndexLeft(paths);
    source_Images();
  };
  leftButton.style.cssText = buttonStyles;
  slider.appendChild(leftButton);

  // create a div and image for each element in images
  let counter = 0;
  paths.array.forEach(e => {
    let image_container = document.createElement('div');
    image_container.classList.add('image-container');

    let image = document.createElement('img');
    image.classList.add('image');
    image.id = `image-${counter}`;
    image.src = e;
    image.alt = 'image';
    images.push(image); // add image to array

    image_container.appendChild(image);
    slider.appendChild(image_container);
    counter++;
  });
  
  // create right control and append to container
  let rightButton = document.createElement('button');
  rightButton.onclick = () => {
    images = shiftIndexRight(paths);
    source_Images();
  };

  rightButton.style.cssText = buttonStyles;
  slider.appendChild(rightButton);

  //append slider to container
  container.appendChild(slider);
}

// shifts contents of array to left
function shiftIndexLeft(arr){
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
function shiftIndexRight(arr){
  let tmp = [];
  let first_element = arr[0];

  for(let i = 1; i < arr.length; i++){
    tmp.push(arr[i]);
  };

  tmp.push(first_element);
  return tmp;
}

function source_Images(){
  let counter = 0;
  images.forEach(e => {
    e.src = paths[counter];
    counter++;
  });
}
