import * as THREE from './build/three.module.js';

import Stats from './jsm/libs/stats.module.js';

import { TrackballControls } from './jsm/controls/TrackballControls.js';
import { VTKLoader } from './jsm/loaders/VTKLoader.js';

var container, stats;

var camera, controls, scene, renderer;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 1e10 );
	camera.position.z = 0.2;

	scene = new THREE.Scene();

	scene.add( camera );

	// light

	var dirLight = new THREE.DirectionalLight( 0x000000 );
	dirLight.position.set( 200, 200, 1000 ).normalize();

	camera.add( dirLight );
	camera.add( dirLight.target );

	var material = new THREE.MeshLambertMaterial( { color: 0xffffff, side: THREE.DoubleSide } );

	var loader = new VTKLoader();
	loader.load( "../models/VTrails_LogoSurf.vtk", function ( geometry ) {

		geometry.center();
		geometry.computeVertexNormals();

		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( 0, 0, 0 );
		mesh.scale.multiplyScalar( 0.2 );
		scene.add( mesh );

	} );

	// renderer

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );

	container = document.createElement( 'div' );
	document.body.appendChild( container );
	container.appendChild( renderer.domElement );

	// controls

	controls = new TrackballControls( camera, renderer.domElement );

	controls.rotateSpeed = 5.0;
	controls.zoomSpeed = 5;
	controls.panSpeed = 2;

	controls.staticMoving = true;

	stats = new Stats();
	container.appendChild( stats.dom );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	controls.handleResize();

}

function animate() {

	requestAnimationFrame( animate );

	controls.update();
	renderer.render( scene, camera );

	stats.update();

}
