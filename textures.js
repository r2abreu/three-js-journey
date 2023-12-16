import * as THREE from "three";

const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
const texture = textureLoader.load("/color.jpg");
texture.magFilter = THREE.NearestFilter;
texture.colorSpace = THREE.SRGBColorSpace;

export { texture };
