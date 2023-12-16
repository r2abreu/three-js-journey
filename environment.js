import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const SIZES = { width: window.innerWidth, height: window.innerHeight };
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, SIZES.width / SIZES.height);
const renderer = new THREE.WebGLRenderer({ canvas });
const orbit = new OrbitControls(camera, canvas);

camera.position.z = 5;
orbit.enableDamping = true;

export { scene, camera, renderer, orbit, SIZES, canvas };
