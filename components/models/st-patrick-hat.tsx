/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Wah Marco (https://sketchfab.com/Wahmarco)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/st-patrick-hat-d3af7afe7565492ca18adc61e9b29d8f
title: St Patrick Hat
*/

import * as THREE from "three"
import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import {
  getHeadWidth,
  getRotationMatrix,
  headTop,
  headTopLeft,
  headTopRight,
  midwayBetweenEyes,
  ModelProps,
  noseBottom,
  videoHeight,
  videoWidth,
} from "."
import { useEffect } from "react"
import { useTransforms } from "../../hooks"

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    aiStandardSurface1SG: THREE.MeshStandardMaterial
  }
}

export const StPatrickHat = ({ face, camera, ...props }: ModelProps) => {
  const { nodes, materials } = useGLTF(
    "assets/st-patrick-hat/scene.gltf"
  ) as GLTFResult

  // Scale to the size of the head
  const headWidth = getHeadWidth(face)

  const transforms = useTransforms({
    face,
    camera,
    anchor: {
      index: headTop,
      offset: { z: -headWidth * 2 },
    },
    scaleCoefficient: 2.5,
  })

  return (
    <group {...transforms} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.33}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.aiStandardSurface1SG}
        />
      </group>
    </group>
  )
}

useGLTF.preload("assets/st-patrick-hat/scene.gltf")
