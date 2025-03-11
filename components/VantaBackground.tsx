"use client";

import { useEffect, useRef, useState } from "react";
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";

interface VantaEffect {
  destroy: () => void;
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = CELLS({
        el: vantaRef.current,
        THREE: THREE,
        color1: 0x0,
        color2: 0x2bf7,
        backgroundColor: 0x000000,
        size: 3,
        speed: 1.5,
      }) as VantaEffect;
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
