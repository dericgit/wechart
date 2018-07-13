import Pyramid from '../../src/index'
import '../../../_common/orbit-controls'

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 500)
camera.position.set(0, 20, 210)

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0xAAAAAA)
document.body.appendChild(renderer.domElement)
const controls = new THREE.OrbitControls( camera, renderer.domElement );
const group = new THREE.Group()

const pyramid = new Pyramid({
  items:[{
    value:5,
    color:'#DE5347'
  },{
    value:20,
    color:'#3DCE3D'
  },{
    value:10,
    color:'#0080FF'
  }],
  text:(item)=>{
    return 'value-'+item.value
  },
  height: 20,
  interval: 2,
  gradient: 0.7
})
group.add(pyramid)
scene.add(group)


// light
const light = new THREE.PointLight(0xffffff, 1, 1000)
light.position.set(0, 10, 100)
scene.add(light)


function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  controls.update();	
}

animate()