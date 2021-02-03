


let scene, camera, renderer;



function init(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);

  hlight = new Three.AmbientLight (0x404040, 100);

  scene.add(hlight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

}



let loader = new THREE.GLTFLoader();
// loader.load('visuali.gltf', function(gltf){
//   scene.add(gltf.scene);
//   renderer.render(scene, camera);
// });

init();

// let controls = new THREE.OrbitControls(camera);
// controls.addEventListener('change', renderer);

function animate() {
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
