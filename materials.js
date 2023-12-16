import * as THREE from "three";
import textures from "./textures";

textures.door.color.colorSpace = THREE.SRGBColorSpace;
const texture = textures.matcaps[8];
texture.colorSpace = THREE.SRGBColorSpace;
const basicMaterial = new THREE.MeshLambertMaterial({
  side: THREE.DoubleSide,
});

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5), basicMaterial);
const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), basicMaterial);
const torus = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.1), basicMaterial);
const SPTGroup = new THREE.Group();
sphere.position.x = -2;
plane.position.x = 2;
SPTGroup.position.y = 2;
SPTGroup.add(sphere, plane, torus);

export { SPTGroup };
