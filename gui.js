import GUI from "lil-gui";
import { first, second, third } from "./cubes.js";
import { bufferShape } from "./buffer-geometry.js";
import { gsap } from "gsap";

const gui = new GUI();

const cubes = [first, second, third];
const cubesGUI = gui.addFolder("Cubes");
cubes.forEach((cube) => {
  const debug = {
    color: cube.material.color.getHexString(),
    spin: function () {
      // How does this work? Which web api is being used here and how can I do it
      // manually. How does GSAP manages to know which type of element its being
      // animated.
      // Understand how all animations work:
      // You want to move an object to X distance in a given time. You need to
      // specify how long is that movement going to take.
      gsap.to(
        // This is the object we want to animate
        cube.rotation,
        {
          // This is the property that we want to animate its magnitude
          y: cube.rotation.y + Math.PI * 2,
          // This is how long the "movement" is going to take
          duration: 1,
          // GSAP will take care of progressively increase the position of the
          // movement according to an easing function (linear by default)
        }
      );
    },
  };
  const cubeFolder = cubesGUI.addFolder(cube.name);
  cubeFolder
    .addColor(
      {
        color: cube.material.color.getHexString(),
      },
      "color"
    )
    .onChange((event) => {
      cube.material.color.set(event);
    });

  const positions = ["x", "y", "z"];
  positions.forEach((position) => {
    cubeFolder
      .add(cube.position, position)
      .min(cube.position[position] - 5)
      .max(cube.position[position] + 5)
      .name(position.toUpperCase());
  });
  cubeFolder.add(debug, "spin");
});

const bufferGUI = gui.addFolder("Buffer");
bufferGUI.add(bufferShape.material, "wireframe").name("Wireframe  ");
