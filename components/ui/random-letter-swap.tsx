"use client";

import { AnimatePresence, motion, Transition } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

interface RandomLetterSwapProps {
  label: string;
  /** Extra classes on the wrapper */
  className?: string;
  /** Delay between each letter animation (seconds) */
  staggerDuration?: number;
  /** Framer-motion transition for each letter */
  transition?: Transition;
  /** Trigger on hover (default) or always */
  trigger?: "hover" | "always";
}

export function RandomLetterSwap({
  label,
  className = "",
  staggerDuration = 0.03,
  transition = { duration: 0.5, type: "spring" },
  trigger = "hover",
}: RandomLetterSwapProps) {
  const [hovering, setHovering] = useState(false);
  const [displayLetters, setDisplayLetters] = useState<string[]>(label.split(""));
  const animFrameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scramble = () => {
    const letters = label.split("");
    let iteration = 0;
    clearTimeout(animFrameRef.current!);

    const tick = () => {
      setDisplayLetters(
        letters.map((char, i) => {
          if (char === " ") return " ";
          if (i < iteration) return letters[i]; // resolved
          return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        })
      );
      if (iteration < letters.length) {
        iteration += 1 / 3;
        animFrameRef.current = setTimeout(tick, staggerDuration * 1000);
      } else {
        setDisplayLetters(letters);
      }
    };
    tick();
  };

  const reset = () => {
    clearTimeout(animFrameRef.current!);
    setDisplayLetters(label.split(""));
  };

  useEffect(() => {
    if (trigger === "always") scramble();
    return () => clearTimeout(animFrameRef.current!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  useEffect(() => {
    if (trigger === "hover") {
      if (hovering) scramble();
      else reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovering, trigger]);

  return (
    <span
      className={`inline-flex overflow-hidden ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      aria-label={label}
    >
      <AnimatePresence mode="popLayout">
        {displayLetters.map((char, i) => (
          <motion.span
            key={`${i}-${char}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ ...transition, delay: i * 0.015 }}
            style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
            aria-hidden="true"
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
}
