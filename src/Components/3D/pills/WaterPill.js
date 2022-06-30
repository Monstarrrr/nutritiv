import React, { useRef, useState } from 'react'
import { Stats, useGLTF } from '@react-three/drei'
import angleToRadians from '../../../Helpers/angleToRadians'
import { useFrame } from '@react-three/fiber'

export default function Model({ ...props }) {
  const modelRef = useRef(0);
  const { nodes, materials } = useGLTF('/water-pill.glb')

  useFrame(() => {
    modelRef.current.rotation.y += 0.01
  })
  
  return (
    <group ref={modelRef}>
      <group 
        dispose={null}
        rotation={[angleToRadians(30), 0, 0]}
        scale={10}
        {...props}
      >
        <group position={[0.002,0,0.004]}>
          <mesh castShadow geometry={nodes.Sphere.geometry} material={materials['lambert2.003']} position={[0.01, 0.02, 0.01]} scale={0.01} />
          <mesh castShadow geometry={nodes.Sphere001.geometry} material={materials['lambert2.003']} position={[0.01, 0.01, -0.01]} rotation={[1.84, 0, 0]} scale={0.01} />
          <mesh castShadow geometry={nodes.Sphere002.geometry} material={materials['lambert2.003']} position={[0.01, 0.06, 0]} scale={0.01} />
          <mesh castShadow geometry={nodes.Sphere003.geometry} material={materials['lambert2.003']} position={[-0.01, 0.04, 0]} scale={0.01} />
          <mesh castShadow geometry={nodes.Sphere004.geometry} material={materials['lambert2.003']} position={[-0.02, 0.02, -0.01]} rotation={[0, 1.38, 0]} scale={0.01} />
          <mesh castShadow geometry={nodes.Sphere005.geometry} material={materials['lambert2.003']} position={[0.01, 0.04, -0.01]} rotation={[0, -1.3, 0]} scale={0.01} />
          <mesh castShadow geometry={nodes.Sphere006.geometry} material={materials['lambert2.003']} position={[-0.01, 0.03, -0.02]} rotation={[0, 0, 1.12]} scale={0} />
          <mesh castShadow geometry={nodes.Sphere007.geometry} material={materials['lambert2.003']} position={[0, 0.03, 0]} rotation={[1.53, 0, 3.1]} scale={0} />
          <mesh castShadow geometry={nodes.Sphere008.geometry} material={materials['lambert2.003']} position={[0.01, 0.03, 0.01]} rotation={[1.86, 1.1, -1.83]} scale={0} />
          <mesh castShadow geometry={nodes.Sphere009.geometry} material={materials['lambert2.003']} position={[0, 0.03, 0.02]} scale={0} />
          <mesh castShadow geometry={nodes.Sphere010.geometry} material={materials['lambert2.003']} position={[-0.02, 0.04, 0]} scale={0} />
          <mesh castShadow geometry={nodes.Sphere011.geometry} material={materials['lambert2.003']} position={[-0.01, 0.02, 0]} scale={0} />
          <mesh castShadow geometry={nodes.Sphere012.geometry} material={materials['lambert2.003']} position={[0.02, 0.01, 0]} rotation={[1.3, -0.64, -0.16]} scale={0} />
          <mesh castShadow geometry={nodes.Sphere013.geometry} material={materials['lambert2.003']} position={[0, 0.05, 0]} scale={0} />
        </group>
        <mesh castShadow geometry={nodes.polySurface3_1001.geometry} material={materials['standardSurface3.002']} position={[0, -0.05, 0]} scale={0.03} />
        <mesh castShadow geometry={nodes.polySurface3_2001.geometry} material={materials.transparent_cap} position={[0, 0.042, 0]} scale={0.03} />
      </group>
    </group>
  )
}

useGLTF.preload('/water-pill.glb')
