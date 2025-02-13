"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";

export const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationStage, setAnimationStage] = useState<
    "idle" | "filling" | "exploding" | "done"
  >("idle");

  const handleClick = () => {
    console.log("ok");
    if (animationStage === "idle") {
      setAnimationStage("filling");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (animationStage === "filling") {
      const timer = setTimeout(() => setAnimationStage("exploding"), 500);
      return () => clearTimeout(timer);
    }

    if (animationStage === "exploding") {
      const timer = setTimeout(() => {
        setAnimationStage("done");
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationStage]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      className="max-w-2xl mx-auto my-16 p-8 bg-valentine-light rounded-lg shadow-lg"
    >
      <button className="w-full text-left">
        <div className="flex flex-col items-center justify-center">
          <svg
            className={`w-24 h-24 mx-auto text-valentine-red ${
              animationStage === "exploding" ? "animate-explodeHeart" : ""
            }`}
            viewBox="0 0 24 24"
          >
            <path
              className="heart-outline"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              className={`${
                animationStage === "filling"
                  ? "animate-fillHeart"
                  : animationStage === "idle"
                  ? "scale-0"
                  : "scale-100"
              }`}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
          <h2 className="font-cursive text-2xl sm:text-4xl text-valentine-red mt-4 text-center ">
            Click to Open My Heart
          </h2>
        </div>
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setAnimationStage={setAnimationStage}
        animationStage={animationStage}
      />
    </div>
  );
};
