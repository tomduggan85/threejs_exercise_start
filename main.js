
/* Assets (you'll use these later) */

const earthImageUrl = 'https://res.cloudinary.com/tomduggan/image/upload/v1535219098/earth.jpg';
const moonImageUrl = 'https://res.cloudinary.com/tomduggan/image/upload/v1535219207/moon.jpg';
const marsImageUrl = 'https://res.cloudinary.com/tomduggan/image/upload/v1535219359/mars.jpg';

/* START setup */

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const aspectRatio = screenWidth/screenHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  40, //Field of view (like zoom)
  aspectRatio, //Aspect ratio of camera
  0.1, //Near plane
  1000 //Far plane
);

camera.position.y = 0.5; //Move slightly up
camera.position.z = 2; //and a little bit back
camera.lookAt(0, 0, 0); //Look to center of scene

const renderer = new THREE.WebGLRenderer();
renderer.setSize(screenWidth, screenHeight);
document.body.appendChild(renderer.domElement);

/* END setup */


function draw() {
  requestAnimationFrame(draw);
  renderer.render(scene, camera);
};

draw();