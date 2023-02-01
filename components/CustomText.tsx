"use client";

import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export function FadingText({
  children,
  textStyles,
  duration = 1,
  onAnimationCompleted,
}: {
  children: string;
  textStyles: string;
  duration?: number;
  onAnimationCompleted: unknown;
}) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      y: `1.5em`,
    },
    visible: {
      y: `0em`,
    },
  };

  return (
    <p aria-label={children} className={`${textStyles} overflow-hidden`}>
      {children.split(" ").map((word, index) => {
        return (
          <motion.span
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="inline-block"
            //@ts-ignore
            onAnimationComplete={() => onAnimationCompleted()}
          >
            {word.split("").map((character, index) => (
              <motion.span
                aria-hidden="true"
                key={index}
                className="inline-block"
                variants={characterAnimation}
                transition={{
                  duration,
                  repeat: 1,
                  repeatType: "reverse",
                  ease: [0.2, 0.65, 0.3, 0.9],
                  repeatDelay: 1,
                }}
              >
                {character}
              </motion.span>
            ))}
          </motion.span>
        );
      })}
    </p>
  );
}

export const TitleLink = ({
  textStyles,
  children,
  href,
}: {
  textStyles: string;
  children: string;
  href: string;
}) => {
  return (
    <Link aria-labelledby={children} href={href} className={textStyles}>
      <span>{children}</span>
    </Link>
  );
};
