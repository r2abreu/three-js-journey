import * as THREE from "three";
// import gsap from "gsap";
import {
  first as firstCube,
  second as secondCube,
  third as thirdCube,
} from "./cubes.js";
import {
  scene,
  camera,
  orbit,
  renderer,
  SIZES,
  canvas,
} from "./environment.js";
import { bufferShape } from "./buffer-geometry.js";
import "./gui.js";

scene.add(camera);
const group = new THREE.Group();
group.add(firstCube, secondCube, thirdCube, bufferShape);
scene.add(group);

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);
renderer.setSize(SIZES.width, SIZES.height);

function tick() {
  orbit.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
}

tick();

window.addEventListener("resize", () => {
  SIZES.width = window.innerWidth;
  SIZES.height = window.innerHeight;

  camera.aspect = SIZES.width / SIZES.height;
  camera.updateProjectionMatrix();

  renderer.setSize(SIZES.width, SIZES.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("dblclick", () => {
  document.fullscreenElement
    ? document.exitFullscreen()
    : canvas.requestFullscreen();
});
