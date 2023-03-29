import React, { useState } from 'react';
import { Scroll, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

interface SectionProps {
  children: React.ReactNode;
  opacity: number;
}

const Section = ({ children, opacity }: SectionProps) => {
  return (
    <section>
      <div>
        <div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacityMidSection, setOpacityMidSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacityMidSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Section opacity={opacityFirstSection}>
          <h1>3층</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quae
            ut, laboriosam non atque et suscipit ipsum quasi? Odio explicabo
            blanditiis nesciunt ullam libero minus laboriosam repellat tenetur
            cupiditate temporibus.
          </p>
        </Section>
        <Section opacity={opacityMidSection}>
          <h1>2층</h1>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1>1층</h1>
        </Section>
      </div>
    </Scroll>
  );
};

export default Overlay;
