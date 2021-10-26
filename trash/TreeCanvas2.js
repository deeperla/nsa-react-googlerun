import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSphere, Physics, usePlane } from '@react-three/cannon'
import {
    OrbitControls, Billboard, Text
  } from "@react-three/drei";

class treeCanvas2 extends Component {
    render() {
        return (
            <Canvas camera={{ position: [0, 0, 15], fov: 95 }}>
                
                <ambientLight intensity={0.6}  />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[0, -10, ]} intensity={1}/>

                <OrbitControls enablePan={true} zoomSpeed={0.05} />
                <Physics 
                  gravity={[0, 0, 0]}
                  defaultContactMaterial={{
                    friction: 100,
                    restitution: 100,
                    contactEquationStiffness: 0.0000000000000001,
                    contactEquationRelaxation: 1,
                    frictionEquationStiffness: 0.000000000000001,
                    frictionEquationRelaxation: 2,
                  }}>
      <Sphere />
      <Sphere2 />
      <Plane />
      <GetBillboard/>
    </Physics>
            </Canvas>
          );
    }

}
function GetBillboard({username}) {
    return (
        <Billboard follow={true}  position={[0, 2.5, 0]}>
            <Text fontSize={1.4} outlineWidth={'0.5%'} outlineColor="#000000" outlineOpacity={1}>
                {username}
            </Text>
        </Billboard>
    );
  }

  function Sphere(props) {
    const [ref] = useSphere(() => ({ mass: 1, position: [0, 5, 0], ...props }))
    return (
      <mesh ref={ref}>
        <sphereBufferGeometry  />
      </mesh>
    )
  }
  function Sphere2(props) {
    const [ref] = useSphere(() => ({ mass: 1, position: [1, 5, 0], ...props }))
    return (
      <mesh ref={ref}>
        <sphereBufferGeometry  />
      </mesh>
    )
  }

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshBasicMaterial
    color="black"
    opacity={0}
    transparent
   />
    </mesh>
  )
}



export default treeCanvas2;
