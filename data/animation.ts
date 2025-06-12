export const leafVariants = {
  initial: (i: number) => ({
    x: Math.random() * window.innerWidth,
    y: -100,
    rotate: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
  }),
  animate: (i: number) => ({
    y: window.innerHeight + 100,
    x: Math.random() * window.innerWidth,
    rotate: Math.random() * 720,
    scale: Math.random() * 0.5 + 0.5,
    transition: {
      duration: Math.random() * 5 + 10,
      repeat: Infinity,
      ease: "linear",
      delay: Math.random() * 5,
    },
  }),
};

// Background circle animation variants
export const circleVariants = {
  initial: (i: number) => ({
    scale: 0,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  }),
  animate: (i: number) => ({
    scale: [0, 1, 0],
    opacity: [0, 0.2, 0],
    transition: {
      duration: Math.random() * 8 + 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 2,
    },
  }),
};
