const buttonStyles = `background: none; color: inherit; border: none; padding: 0; font: inherit; cursor: pointer; outline: inherit;`;
const sliderStyles = `display: flex; flex-direction: row; align-items: center; width: 60%; margin: auto;`;
const imageContainerStyles = `width: 100px; height: 100px; margin: 1em 1em 1em 1em; border:1px solid grey;`;
const primaryImageContainerStyles = `width: 200px;height: 200px;margin: 1em 1em 1em 1em;`;
const imageStyles = `height: 100%; max-width: 100%;`;

let images = [];  // contains image controls
let paths = []; // contains paths for images

export function createControls(imagePaths, containerName, autoPlay){
  let container = document.getElementById(containerName);
  paths = imagePaths;

  //create overall slider control 
  let slider = document.createElement('div'); 
  slider.classList.add('slider-control');
  slider.style.cssText = sliderStyles;

  // create and style left button and append to control so it is the 1st element < img img IMG img img >
  let leftButton = document.createElement('button');
  leftButton.innerText = '<';
  leftButton.onclick = () => {
    paths = shiftIndexLeft(paths);
    source_Images();
  };
  leftButton.style.cssText = buttonStyles;
  slider.appendChild(leftButton);

  // create a div and image for each element in images
  let counter = 0;
  paths.forEach(e => {
    let image_container = document.createElement('div');

    if (counter === 2){
      image_container.classList.add('primary-image-container');
      image_container.style.cssText = primaryImageContainerStyles;
    } else {
      image_container.classList.add('image-container');
      image_container.style.cssText = imageContainerStyles;
    }
    
    let image = document.createElement('img');
    image.classList.add('image');
    image.style.cssText = imageStyles;
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
  rightButton.innerText = '>';
  rightButton.onclick = () => {
    paths = shiftIndexRight(paths);
    source_Images();
  };

  rightButton.style.cssText = buttonStyles;
  slider.appendChild(rightButton);

  //append slider to container
  container.appendChild(slider);

  // if autoplay is enabled, push the images through the slider automatically
  if(autoPlay) {
    setInterval(() => {
      paths = shiftIndexRight(paths);
      source_Images();
    },5000)
  };
    
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
