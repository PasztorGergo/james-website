"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FadingText, TitleLink } from "../components";
import styles from "../styles";

const Home = () => {
  const [isAnimationCompleted, setCompleted] = useState<boolean>(false);
  const [aboutHover, setAboutHover] = useState<boolean>(false);
  const [workHover, setworkHover] = useState<boolean>(false);
  const [quoteHover, setquoteHover] = useState<boolean>(false);

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
            className="h-screen w-full flex overflow-hidden relative"
          >
            <div className="flex flex-col h-full justify-center grow-[0.5]">
              <TitleLink
                href="/about"
                textStyles={styles.navLink}
                onMouseEnter={() => {
                  setAboutHover(true);
                }}
                onMouseLeave={() => {
                  setAboutHover(false);
                }}
              >
                About Me
              </TitleLink>
              <TitleLink
                href="/about"
                textStyles={styles.navLink}
                onMouseEnter={() => {
                  setworkHover(true);
                }}
                onMouseLeave={() => {
                  setworkHover(false);
                }}
              >
                My Work
              </TitleLink>
              <TitleLink
                href="/about"
                textStyles={styles.navLink}
                onMouseEnter={() => {
                  setquoteHover(true);
                }}
                onMouseLeave={() => {
                  setquoteHover(false);
                }}
              >
                Get a quote
              </TitleLink>
            </div>
            <AnimatePresence>
              {aboutHover && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 1.25,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.25,
                    transition: { duration: 0.2, damping: 10, type: "spring" },
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2, damping: 10, type: "spring" },
                  }}
                  className="grid grid-cols-2 grid-rows-1 place-items-center text-white w-[50%] grow-[0.5] relative"
                >
                  <Image
                    alt="James Lima"
                    src="/James.png"
                    className="aspect-square rounded-full -mr-20 left-10 absolute"
                    width={427}
                    height={427}
                  />
                  <div className="rounded-full -ml-20 bg-[#252525] right-10 absolute bg-opacity-60 aspect-square w-[427px] grid place-items-center">
                    <p className={`${styles.paragraph} uppercase`}>
                      Take a <br />
                      glance at
                      <br /> my skills
                      <br /> and
                      <br /> experience
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {workHover && (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 1.25,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.25,
                    transition: { duration: 0.2, damping: 10, type: "spring" },
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.2, damping: 10, type: "spring" },
                  }}
                  className="grid grid-rows-2 max-h-[409px] gap-4 grid-cols-2 place-items-center top-0 right-0 mt-40 absolute"
                >
                  <Image
                    src="/guggenheim.png"
                    alt="guggenheim"
                    width={285}
                    height={200}
                    className="row-span-1 row-start-1 col-span-1 col-start-1 justify-self-end"
                  />
                  <Image
                    src="/calculator.png"
                    alt="calculator"
                    width={285}
                    height={200}
                    className="row-start-2 row-span-1 col-span-1 col-start-1 place-self-end"
                  />
                  <Image
                    src="/nike-poster.png"
                    alt="nike-poster"
                    width={307}
                    height={400}
                    className="col-start-2 col-span-1 row-span-2 row-start-1 justify-self-start"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
