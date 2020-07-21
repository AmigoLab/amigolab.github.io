//
import * as THREE from '/assets/js/three/build/three.module.js';
import { TrackballControls } from '/assets/js/three/jsm/controls/TrackballControls.js';
import { VTKLoader } from '/assets/js/three/jsm/loaders/VTKLoader.js';


var camera, controls, scene, renderer, canvas;
init();
animate();

function init() {
var element = document.getElementById( "threejs-container" ) || document.body;
var options = {antialias: true};
if ( element instanceof HTMLCanvasElement ){ options.canvas = element;}
renderer = new THREE.WebGLRenderer( options );
if ( !options.canvas ) { element.appendChild( renderer.domElement ); canvas = renderer.domElement} 
else {canvas = element;}
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor(0xe6e6e6, 1);
renderer.setSize(element.clientWidth, element.clientHeight);
canvas.style.width ='100%';
var width = element.clientWidth;
var height = element.clientHeight;



// Camera
camera = new THREE.PerspectiveCamera( 60, width/height, 0.2, 1e10 );
camera.position.z = 0.4;
camera.position.x = 0.1;
camera.position.y = -0.5;
camera.lookAt(new THREE.Vector3(0,0,0)); 

scene = new THREE.Scene();
scene.add( camera );

// Light
var dirLight = new THREE.DirectionalLight( 0xffffff );
dirLight.position.set( 200, 200, 1000 ).normalize();
camera.add( dirLight );
camera.add( dirLight.target );

var material = new THREE.MeshLambertMaterial( { color: 0xa0b3c5, side: THREE.DoubleSide } );

var loader = new VTKLoader();
loader.load( "/assets/models/VTrails_LogoSurf.vtk", function ( geometry ) {
	geometry.center();
	geometry.computeVertexNormals();
	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( 0, 0, 0 );
	mesh.scale.multiplyScalar( 0.02 );
	scene.add( mesh );
	} );


// Controls
controls = new TrackballControls( camera, renderer.domElement );
controls.rotateSpeed = 5.0;
controls.zoomSpeed = 5;
controls.panSpeed = 2;
controls.staticMoving = true;
}



window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // set render target sizes here
  
}

function animate() {
requestAnimationFrame( animate );
controls.update();
renderer.render( scene, camera );
}
