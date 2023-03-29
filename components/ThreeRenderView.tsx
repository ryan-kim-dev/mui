import React from 'react';
import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Office } from './model/Office';
import Overlay from './Overlay';

const ThreeRenderView = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};

export default ThreeRenderView;
