"use strict";

      //
      // if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
      //
      // var camera, scene, renderer;
      // var geometry, material, mesh;
      //
      // function setup() {
      //
      //   var W = window.innerWidth, H = window.innerHeight;
      //   renderer = new THREE.WebGLRenderer();
      //   renderer.setSize( 1590, H );
      //   document.body.appendChild( renderer.domElement );
      //
      //   camera = new THREE.PerspectiveCamera( 50, W/H, 1, 10000 );
      //   camera.position.z = 300;
      //
      //
      //   scene = new THREE.Scene();
      //
      //
      //   geometry = new THREE.OctahedronGeometry(54.92, 4);
      //   material = new THREE.MeshBasicMaterial({shading: THREE.FlatShading, color: 0xd2d2d2, wireframe: true, wireframeLinewidth: 8});
      //   mesh = new THREE.Mesh(geometry, material);
      //   scene.add(mesh);
      // }
      // function draw() {
      //   requestAnimationFrame( draw );
      //   /* ------------------- INSTRUCTIONS -----
      //   to rotate a mesh
      //   add the code below to your draw() function
      //
      //   mess with the numbers to change the speed
      //   -------------------------------------- */
      //   mesh.rotation.x = Date.now() * 0.0007;
      //   mesh.rotation.y = Date.now() * 0.0009;
      //   mesh.rotation.z = Date.now() * 0.001;
      //
      //   renderer.render( scene, camera );
      // }
      //
      // setup();
      // draw();


    //   $(document).ready(function() {
    //
    //     $("#grey").hover(
    //       //on mouseover
    //       function() {
    //         $(this).animate({
    //           height: '+=500' //adds 250px
    //           }, 'slow' //sets animation speed to slow
    //         );
    //       },
    //       //on mouseout
    //       function() {
    //         $(this).animate({
    //           height: '-=500px' //substracts 250px
    //           }, 'slow'
    //         );
    //       }
    //     );
    //
    //   });
    //
    //   $('.tab').hover(function() {
    //      $(this).stop()
    //      $(this).animate({
    //         height: '+=500'
    //       }, 500)
    //
    //          }, function() {
    //     $(this).stop()
    //      $(this).animate({
    //         height: '-=500'
    //       }, 500)
    // })

    $(document).ready(function(){
    $(window).resize();
});
$(window).resize(function{
    // your code
    var windowWidth=$(window).width();
    var mainContainerWidth=windowWidth-100; // For example
    $("#yourMainContainer").css({"width":mainContainerWidth+"px"});
});
