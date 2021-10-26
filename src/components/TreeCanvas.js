import React from 'react';
import { Canvas } from '@react-three/fiber';
// import niceColors from 'nice-color-palettes'
import {
    MeshDistortMaterial,
    Sphere,
    OrbitControls, Billboard, Text
  } from "@react-three/drei";



function TreeCanvas({level1Array, setLevel1Array}) {
    // const [userarray, setuserarray] = useState([{id:1, value:1}])

    // console.log(userarray)
    // setuserarray(userarray => [...userarray, {id:2, value:2}])
    // userarray.push
    // console.log(userarray)
    

        return (
            <div className="treecanvas">
            <Canvas camera={{ position: [0, 0, 15], fov: 50, aspect:16, focus:100}}>
                
                <ambientLight intensity={0.3}  />
                <hemisphereLight intensity={0.3} />
                {/* <directionalLight position={[10, 10, 5]} intensity={0.3} /> */}
                <spotLight position={[30, 0, 30]} angle={0.3} penumbra={1} intensity={0.4} castShadow shadow-mapSize-width={256} shadow-mapSize-height={256} />
    {/* <pointLight position={[-30, 0, -30]} intensity={0.5} /> */}
                {/* <pointLight position={[0, -10, ]} intensity={0.5}/> */}
                {level1Array ? (
                    <GetBillboardSpherGroup level1Array={level1Array}/>
                ): null
                }
                {/* <GetBillboardSpherGroup username={"User1"} color={randomColor()} position={[-6,-2,0]}/>
                <GetBillboardSpherGroup username={"User2"} color={randomColor()} position={[-3,-2,0]}/> */}
                <OrbitControls       
                    enableDamping={true}
                    dampingFactor={0.25}
                    rotateSpeed={0.4}
                    keyPanSpeed={0.4}
                    screenSpacePanning={true}
                    zoomSpeed={0.6}
                    enablePan={true}
                    panSpeed={0.4}
                    // minPolarAngle={Math.PI / 4}
                    // maxPolarAngle={Math.PI / 2}
                    minDistance={12}
                    maxDistance={20} />
            </Canvas>
            </div>
          );
    

}
function GetBillboardSpherGroup({level1Array}) {
    // const level1Array = level1Array
    // console.log('tree',level1Array)
    const positions = [[0,0,0],[-5,0,0],[5,0,0],[0,-3,0],[-5,-3,0],[5,-3,0]]
    return (
        
        level1Array.map((level1, index) => (
            <group key={level1.id} position={positions[index]}>
                <Billboard follow={true}  position={[0, 1.3, 0]}>
                    <Text fontSize={0.4} color={'#c9c9c9'}>
                    {level1.username}
                    </Text>
                </Billboard>
                <Sphere visible args={[1, 32, 32]}>
                    <MeshDistortMaterial color='#36b5ff' attach="material" distort={0.15} speed={1} roughness={0.3}/>
                </Sphere>
            </group>
        ))


    );
  }

 
  

  
// function randomColor() {
//     return niceColors[Math.floor(Math.random() * 100)][Math.floor(Math.random() * 4)]
// }
// function randomPosition(min,max) {
//     return [Math.floor(Math.random() * (max - min + 1) + min)]
// }


export default TreeCanvas;
