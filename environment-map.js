import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import * as THREE from "three";

const rgbeLoader = new RGBELoader();
const environmentMap = await rgbeLoader.asyncLoad("/environment-map/2k.hdr");
environmentMap.mapping = THREE.EquirectangularReflectionMapping;

export { environmentMap };
THREE.MeshStandardMaterial();
