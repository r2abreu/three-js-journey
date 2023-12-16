import * as THREE from "three";

const count = 50;
const vertices = new Float32Array(count * 3 * 3); // 50 triangles * 3 vertex * 3 values (a vertex is made of 3 components or values);

for (let i = 0; i < vertices.length; i++) {
  vertices[i] = Math.ceil(Math.random() * 3);
}

const bufferGeometry = new THREE.BufferGeometry();

bufferGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

const bufferShape = new THREE.Mesh(
  bufferGeometry,
  new THREE.MeshBasicMaterial({ wireframe: true })
);

export { bufferShape };
