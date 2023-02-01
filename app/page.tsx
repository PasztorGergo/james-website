"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FadingText, TitleLink } from "../components";
import styles from "../styles";

const Home = () => {
  const [isAnimationCompleted, setCompleted] = useState<boolean>(false);
  return (
    <>
      <AnimatePresence>
        {!isAnimationCompleted && (
          <motion.div className="grid place-items-center h-screen">
            <FadingText
              textStyles={styles.title}
              onAnimationCompleted={() => {
                setCompleted(true);
              }}
            >
              James.
            </FadingText>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isAnimationCompleted && (
          <motion.main
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="h-screen w-full flex"
          >
            <div className="flex flex-col h-full justify-center">
              <TitleLink href="/about" textStyles={styles.navLink}>
                About Me
              </TitleLink>
              <TitleLink href="/about" textStyles={styles.navLink}>
                My Work
              </TitleLink>
              <TitleLink href="/about" textStyles={styles.navLink}>
                Get a quote
              </TitleLink>
            </div>
            <div className="grid grid-cols-2 grid-rows-1"></div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
