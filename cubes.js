import * as THREE from "three";
import { texture } from "./textures.js";

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

const first = new THREE.Mesh(
  cubeGeometry,
  new THREE.MeshBasicMaterial({ map: texture })
);

const second = new THREE.Mesh(
  cubeGeometry,
  new THREE.MeshBasicMaterial({ color: "green" })
);

const third = new THREE.Mesh(
  cubeGeometry,
  new THREE.MeshBasicMaterial({ color: "blue" })
);

first.position.x = -2;
third.position.x = 2;

first.name = "First";
second.name = "Second";
third.name = "Third";

export { first, second, third };
