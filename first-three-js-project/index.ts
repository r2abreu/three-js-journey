import * as THREE from "three";
import GUI, { Controller } from "lil-gui";

const sizes = { width: 800, height: 600 };
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

const cube = createCube();

const canvas = document.querySelector("#webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas || undefined,
});
scene.add(camera, cube);

renderer.setSize(sizes.width, sizes.height);

(function tick() {
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
})();

/**
 * GUI
 */
const gui = new GUI();
// Canvas
const sizesGui = gui.addFolder("Sizes");
sizesGui
  .add(sizes, "width")
  .name("Width")
  .min(200)
  .max(1000)
  .onChange(() => renderer.setSize(sizes.width, sizes.height));
sizesGui
  .add(sizes, "height")
  .name("Height")
  .min(200)
  .max(1000)
  .onChange(() => renderer.setSize(sizes.width, sizes.height));
// Camera
const cameraGui = gui.addFolder("Camera").addFolder("Position");
cameraGui.add(camera.position, "x").name("x").min(-5).max(5);
cameraGui.add(camera.position, "y").name("y").min(-5).max(5);
cameraGui.add(camera.position, "z").name("z").min(-5).max(5);
// Geometry
const geometryGui = gui.addFolder("Geometry");

geometryGui
  .add(cube.geometry.parameters, "height", 1, 3)
  .onChange(updateCubeGeometry);
geometryGui
  .add(cube.geometry.parameters, "width", 1, 3)
  .onChange(updateCubeGeometry);
geometryGui
  .add(cube.geometry.parameters, "depth", 1, 3)
  .onChange(updateCubeGeometry);
// Material
const materialGui = gui.addFolder("Material");
materialGui.addColor(cube.material, "color").name("Color");

/**
 * Helpers
 */

function createCube(
  width = 1,
  height = 1,
  depth = 1,
  geometry?: THREE.BoxGeometry,
  material?: THREE.Material
) {
  const _geometry = geometry || new THREE.BoxGeometry(width, height, depth);
  const _material = material || new THREE.MeshBasicMaterial({ color: "red" });

  return new THREE.Mesh(_geometry, _material);
}

function updateCubeGeometry(this: Controller, value: number) {
  const newParameters = { ...cube.geometry.parameters, [this.property]: value };
  cube.geometry.dispose();
  cube.geometry = new THREE.BoxGeometry(...Object.values(newParameters));
}
