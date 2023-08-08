import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


/* animated text while scrolling */ 
const images = document.querySelectorAll('.anim');

let observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            if(entry.target.classList.contains('anim-left')) {
                entry.target.classList.add('anim1-left');
                entry.target.classList.add('show');
            } else if (entry.target.classList.contains('anim-right')) {
                entry.target.classList.add('anim1-right');
                entry.target.classList.add('show');
            } else {
                entry.target.classList.add('anim1-down');
                entry.target.classList.add('show');
            }      
        } else {
            if(entry.target.classList.contains('anim-left')) {
                entry.target.classList.remove('anim1-left');     
                entry.target.classList.remove('show');     
            } else if (entry.target.classList.contains('anim-right')) {
                entry.target.classList.remove('anim1-right');
                entry.target.classList.remove('show');
            } else {
                entry.target.classList.remove('anim1-down');
                entry.target.classList.remove('show');
            }      
        }
    });
    
});

images.forEach(image => {
    observer.observe(image);
});

/* 3D model */
// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf8f8f8)

// Create 3D model
const geometry = new THREE.TorusKnotGeometry( 12, 3.4, 205, 20, 2, 3 ); 
const material = new THREE.MeshStandardMaterial({ 
    color: 0x81fe3e,
    roughness: 0.5,
}); 
const torus = new THREE.Mesh( geometry, material ); 
scene.add( torus );

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Light
const light = new THREE.HemisphereLight(0xffffff, 1);
scene.add( light );

// Camera
const camera = new THREE.PerspectiveCamera(45, 300 / 300, 0.1, 100);
camera.position.z = 60;
scene.add( camera );

// Renderer
const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(300, 300);
renderer.setPixelRatio(2);
renderer.render( scene, camera );

// Controls
const controls = new OrbitControls( camera, canvas );
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

const loop = () => {
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
loop();
