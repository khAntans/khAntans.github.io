let activeObj = [];
AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],


  init: function () {
    this.el.addEventListener('raycaster-intersection', function (event) {
      console.log('Player hit something!');
      activeObj.push(event.detail.els[0]);
      event.detail.els[0].setAttribute('scale', { x: 2, y: 2, z: 2 })


    });
    this.el.addEventListener('raycaster-intersection-cleared', function (event) {
      console.log("exit");

      let last = activeObj[0];
      last.setAttribute('scale', { x: 1, y: 1, z: 1 });
      activeObj.shift();

    });



  }
});


document.addEventListener("click", function () {
  const scene = document.querySelector("a-scene");
  const box = document.createElement("a-box");
  const camera = document.querySelector('a-scene').camera.el.object3D;
 
  box.setAttribute("color", "red");
  box.setAttribute("position", "0 0 -2");

  
  camera.remove(box);
  scene.appendChild(box);
})