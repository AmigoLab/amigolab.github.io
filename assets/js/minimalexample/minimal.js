// render essentials
var scene, camera, renderer;
var guiElements;


// init scene, camera, model and renderer
function init() {
    // THREE.js scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 'skyblue' );

    var canvasHolder = document.getElementById('canvas-holder');
    var width = canvasHolder.clientWidth;
    var height = width * 0.8;
    canvasHolder.clientHeight = height;

    const fov = 35; // AKA Field of View
    const near = 0.1; // the near clipping plane
    const far = 100; // the far clipping plane

    const camera = new THREE.PerspectiveCamera( fov, width / height, near, far );

    camera.position.set( 0, 0, 10 );

    const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial();
    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    // renderer setup
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    canvasHolder.appendChild( renderer.domElement );
    renderer.render( scene, camera );
}


// load dat menu
window.onload = function() {
    // Hurray!
    init();
};
