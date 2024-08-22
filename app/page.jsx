"use client";
import { motion } from "framer-motion";
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const TypingAnimation = React.memo(
  () => {
    return (
      <ReactTypingEffect
        text={["React Developer", "Frontend Developer", "Software Developer"]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2500}
        typingDelay={100}
      />
    );
  },
  (props, prevProps) => true
);

export default function Home() {
  return (
    <>
      <motion.img
        src="ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <motion.img
        src="ball-2.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-xl md:mt-3 dark:text-white">
              Hüseyin ASLAN
      
            </h1>
            <div className="text-2xl mt-5 font-normal tracking-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text  md:mt-3">
              <TypingAnimation />
            </div>

            {/* social accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/haslan82"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200 "
              >
                <FaGithub className="w-8 h-8 fill-current" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/h%C3%BCseyin-aslan-128519203/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200 "
              >
                <FaLinkedin className="w-8 h-8 fill-current" />
              </motion.a>
              <motion.a
                href="https://x.com/huseyinaslan82"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200 "
              >
                <FaXTwitter className="w-8 h-8 fill-current" />
              </motion.a>
            </div>
          </div>

          {/* code area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag
                    these balloons I'm really in love with them 🎈🎈
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQFo537ZtJ39KA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1714497811867?e=1729728000&v=beta&t=eETaDlFDInPr_qDA349dUW3QT26DG46vi7NsBrzHwhQ"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">2</span> =
                        ["Reactjs", "Nextjs", "Graphql", "Nodejs"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">3</span> =
                        ["Solidity", "Web3.js", "Ethers.js"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects" legacyBehavior>
                      <a className="transition duration-300">Projects</a>
                    </Link>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
