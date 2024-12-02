import { Children, ReactNode, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../utils/cn";
import { nanoid } from "nanoid";

export const FlipWords = ({
  delay = 0.03,
  children,
}: {
  delay?: number;
  children: ReactNode;
}) => {
  const [letters, setLetters] = useState<ReactNode[]>([]);
  const wordNode = Children.toArray(children)[0] as ReactNode;

  const replaceNodes = () => {
    let letrs = wordNode?.props?.children;
    letrs = letrs.split("");
    letrs = letrs.map((letter: string, i: number) => {
      return letter === " " ? (
        <span key={i}>&nbsp;</span>
      ) : (
        <motion.span
          children={letter}
          initial={{
            scale: 4,
            y: 20,
            opacity: 0,
            rotateY: -180,
            rotateZ: 180,
            filter: "blur(9px)",
          }}
          animate={{
            scale: 1,
            y: 0,
            opacity: 1,
            rotateY: 0,
            rotateZ: 0,
            filter: "blur(0px)",
          }}
          transition={{ delay: delay * i }}
          key={nanoid()} // truco de mágia 🪄
        />
      );
    });
    setLetters(letrs);
  };

  useEffect(() => {
    replaceNodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      onClick={replaceNodes}
      className={cn("text-left flex", wordNode?.props?.className)}
    >
      {letters}
    </button>
  );
};
