"use client";

import { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

interface HeartProps {
  left: string;
  top: string;
  width: string;
  animation: string;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);

  useEffect(() => {
    const newHearts = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}rem`,
      animation: `float ${Math.random() * 3 + 2}s infinite`,
    }));

    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden top-0 left-0 bottom-0 right-0 -z-20">
      {hearts.map((heart, i) => (
        <HeartIcon
          key={i}
          className="absolute text-valentine-pink opacity-50"
          style={heart}
        />
      ))}
    </div>
  );
};
