---
name            : "Stefano Moriconi"
avatar          : "/assets/images/people/Stefano.png"
position        : "PosDoc"
bio             : "AI Enabled Neurology - Stroke - Vascular Image Analysis"
email           : "stefano.moriconi@kcl.ac.uk"
twitter         :
uri             :
linkedin        :
github          : "stefanomoriconi"
google_scholar  :
orcid           :

projects:
  - "Generative Modelling"
  - "Meaning of Life"
---

Biomedical Engineer at Politecnico di Milano, jr. Research Fellow at the Italian National Research Council, PhD in Medical Physics and Biomedical Engineering at University College London, now Research Associate at King’s College London - School of Biomedical Engineering & Imaging Sciences.

# JAVASCRIPT EXAMPLES
## Hello world

<script type="text/javascript" language="JavaScript">
   document.writeln( "Hello World" );
</script>

## Three example 1
from [https://stefanomoriconi.github.io/testThreeJs/](https://stefanomoriconi.github.io/testThreeJs/) . Here below.

<style>
.highlight-left {margin-left: 0}
canvas { position: relative; top: 0;}
</style>

<div id='my-canvas-holder' style="position:relative; width: 100%;"></div>

<script src="./three/three.js"></script>

<script type="module">

import * as THREE from '/assets/js/three/build/three.module.js';
import { TrackballControls } from '/assets/js/three/jsm/controls/TrackballControls.js';
import { VTKLoader } from '/assets/js/three/jsm/loaders/VTKLoader.js';

var camera, controls, scene, renderer;

init();
animate();

function init() {

// Container
var container = document.getElementById('my-canvas-holder');
var width = 600;
var height = 450;

// Camera
camera = new THREE.PerspectiveCamera( 60, width/height, 0.01, 1e10 );
camera.position.z = 0.2;

scene = new THREE.Scene();

scene.add( camera );

// light
var dirLight = new THREE.DirectionalLight( 0xffffff );
dirLight.position.set( 200, 200, 1000 ).normalize();
camera.add( dirLight );
camera.add( dirLight.target );

var material = new THREE.MeshLambertMaterial( { color: 0xffffff, side: THREE.DoubleSide } );

var loader = new VTKLoader();
loader.load( "/assets/models/VTrails_LogoSurf.vtk", function ( geometry ) {
	geometry.center();
	geometry.computeVertexNormals();
	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( 0, 0, 0 );
	mesh.scale.multiplyScalar( 0.02 );
	scene.add( mesh );
	} );

// Renderer
renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(width, height);
renderer.setClearColor(0x2f3e4c, 1);
container.appendChild( renderer.domElement );

// Controls

controls = new TrackballControls( camera, renderer.domElement );
controls.rotateSpeed = 5.0;
controls.zoomSpeed = 5;
controls.panSpeed = 2;
controls.staticMoving = true;
	
}

function animate() {
requestAnimationFrame( animate );
controls.update();
renderer.render( scene, camera );
}

</script>

## Three example 2
from [http://longqian.me/2017/02/06/jekyll-threejs/](http://longqian.me/2017/02/06/jekyll-threejs/) . Click in the frame!

<style>
.highlight-left {margin-left: 0}
canvas { position: relative; top: 0;}
</style>

<div id='canvas-holder' style="position:relative; width: 100%;">
  <div id="dat-gui-holder" style="position: absolute; top: 0em; right: 0em;z-index: 1;" ></div>
</div>

<!--Load three.js-->
<script src="/assets/js/example2/three.min.js"></script>
<script src="/assets/js/example2/dat.gui.min.js"></script>
<script src="/assets/js/example2/OBJLoader.js"></script>
<script src="/assets/js/example2/SubdivisionModifier.js"></script>  


<script type="x-shader/x-vertex" id="vertexshader">
attribute float distance;
attribute vec3 surfaceNormal;
uniform float amplitude;
varying vec3 vNormal;
void main() {
    vNormal = normal;
    vec3 newPosition = position + surfaceNormal * vec3(distance * amplitude);
    gl_Position = projectionMatrix *
                modelViewMatrix *
                vec4(newPosition,1.0);
}
</script>

<script type="x-shader/x-fragment" id="fragmentshader">
varying vec3 vNormal;
void main() {
    vec3 light = vec3(0.7, 0.5, 1.0);
    light = normalize(light);
    float dProd = max(0.0, dot(vNormal, light));
    gl_FragColor = vec4(dProd, // R
                        dProd, // G
                        dProd, // B
                        1.0);  // A
}
</script>
<script src="/assets/js/example2/teapot.js"></script>


## Three example 3
from [https://discoverthreejs.com/book/first-steps/first-scene/](https://discoverthreejs.com/book/first-steps/first-scene/)

<div id="scene-container">
  <!-- This div will hold our scene-->
  <canvas width="400" height="300" style="width: 400px; height: 300px;"></canvas>
</div>

<script type="module">
import * as THREE from '/assets/js/three/build/three.module.js';

// Get a reference to the container element that will hold our scene
const container = document.querySelector( '#scene-container' );

// create a Scene
const scene = new THREE.Scene();

// Set the background color
scene.background = new THREE.Color( 'skyblue' );

// Create a Camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

// every object is initially created at ( 0, 0, 0 )
// we'll move the camera back a bit so that we can view the scene
camera.position.set( 0, 0, 10 );

// create a geometry
const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

// create a default (white) Basic material
const material = new THREE.MeshBasicMaterial();

// create a Mesh containing the geometry and material
const mesh = new THREE.Mesh( geometry, material );

// add the mesh to the scene
scene.add( mesh );

// create the renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize( container.clientWidth, container.clientHeight );
renderer.setPixelRatio( window.devicePixelRatio );

// add the automatically created <canvas> element to the page
container.appendChild( renderer.domElement );

// render, or 'create a still image', of the scene
renderer.render( scene, camera );
</script>
