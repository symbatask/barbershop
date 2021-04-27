

var canvas = document.createElement("canvas");
c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var imageData = c.createImageData(canvas.width, canvas.height);
document.body.appendChild(canvas);

(function loop() {

    for (var i = 0, a = imageData.data.length; i < a; i++) {
        imageData.data[i] = (Math.random() * 255)|0;
    }

    c.putImageData(imageData, 0, 0);
    requestAnimationFrame(loop);

})();


import * as $ from '//unpkg.com/three@0.123.0/build/three.module.js'
import { OrbitControls } from '//unpkg.com/three@0.123.0/examples/jsm/controls/OrbitControls.js'

// ----
// Boot
// ----

const renderer = new $.WebGLRenderer({ antialias: true });
const scene = new $.Scene();
const camera = new $.PerspectiveCamera(75, 2, .1, 1000);
const cubeRT = new $.WebGLCubeRenderTarget(128);
const cubeCamera = new $.CubeCamera(.1, 1000, cubeRT);
const controls = new OrbitControls(camera, renderer.domElement);
window.addEventListener('resize', () => {
    const { clientWidth, clientHeight } = renderer.domElement;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
});
document.body.prepend(renderer.domElement);
window.dispatchEvent(new Event('resize'));

// ----
// Main
// ----
// https://unsplash.com/photos/NIRxgJWC338
const IMGURL = 'https://images.unsplash.com/photo-1603924147107-81e7a2b3051e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
// https://unsplash.com/photos/GPYVKpJQtH4
const IMGURL2 = 'https://images.unsplash.com/photo-1608702885483-c9dd2030329a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';

$.ShaderChunk.my_map_fragment = `
#ifdef USE_MAP
    float t = t * 0.0001;
    vec2 uv = vUv * vec2(2.0, 10.0) + vec2(0.5, 0.5);
    vec4 o = texture2D(map, uv);
    vec4 nu = 
          0.3 * (texture2D(map, uv * vec2(2.0, 2.0) + vec2(0, t + o.b))) // water
        + 0.1 * (texture2D(map, uv * vec2(1.0, 1.0) + vec2(t))) // cyclone
        + 0.6 * (texture2D(map, uv * vec2(1.0, 1.0) + vec2(0.0, t)) + 0.5); // closest 
    vec4 C = pow(nu + 0.1, vec4(4.0));
    C = mapTexelToLinear(C);
    diffuseColor *= C;
#endif
`;

controls.target.set(-1, 4, 0);
camera.position.set(-1, -4, 1);

const geom = new $.SphereBufferGeometry(4, 32, 32);
const mat = new $.ShaderMaterial({
    uniforms: $.UniformsUtils.merge([$.ShaderLib.basic.uniforms, { t: { value: 0 } }]),
    vertexShader: $.ShaderLib.basic.vertexShader,
    fragmentShader: `uniform float t;\n` + $.ShaderLib.basic.fragmentShader.replace('<map_fragment>', '<my_map_fragment>'),
    side: $.BackSide
});
const tex = new $.TextureLoader().load(IMGURL);
tex.wrapS = tex.wrapT = $.MirroredRepeatWrapping;
mat.map = mat.uniforms.map.value = tex;
const tmpMesh = new $.Mesh(geom, mat);
tmpMesh.scale.set(1, 20, 1);
scene.add(tmpMesh);

const mesh = new $.Mesh(
    new $.SphereBufferGeometry(1, 32, 64),
    new $.MeshStandardMaterial({
        emissive: 'white', emissiveIntensity: 0.12,
        metalness: 1, roughness: 0, envMap: cubeRT.texture, envMapIntensity: 1,
        map: new $.TextureLoader().load(IMGURL2)
    })
);
scene.add(mesh);

//// Render & Anim

renderer.setAnimationLoop((t) => {
    mesh.visible = false; // 1. hide
    cubeCamera.position.copy(mesh.position); // 2. move cam to mesh pos
    cubeCamera.update(renderer, scene); // 3. upd cube cam's rt
    mesh.visible = true; // 4. unhide
    renderer.render(scene, camera);
    controls.update();
    mat.uniforms.t.value = t;
});

gsap.to(mesh.rotation, { x: -Math.PI * 2, duration: 10, repeat: -1, ease: 'none' });-1, ease: 'none' });