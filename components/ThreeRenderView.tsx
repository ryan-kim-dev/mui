import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Office } from './model/Office';

const ThreeRenderView = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <Office />
    </>
  );
};

export default ThreeRenderView;
