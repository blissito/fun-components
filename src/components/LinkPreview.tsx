import { useMotionValue, useSpring, motion } from "motion/react";
import { MouseEvent, ReactNode, useRef } from "react";
import { useMeasure } from "../hooks/useMeasure";

export const LinkPreview = ({
  children,
  src,
}: {
  children?: ReactNode;
  className?: string;
  src?: string;
}) => {
  const motionX = useMotionValue(-24); // -left-6
  const springX = useSpring(motionX, { bounce: 0.2 });
  //   const [scope, animate] = useAnimate();
  const textRef = useRef<HTMLAnchorElement>(null);

  const { width, x } = useMeasure(textRef);

  const handleMouseOver = (event: MouseEvent<HTMLDivElement>) => {
    // cuánto mide el texto? pa saber el porcentaje de recorrido?
    const clientX = event.clientX;
    const internalX = clientX - x;
    const percentage = internalX / width;
    const theX = (percentage * width - 24) * 0.3;
    motionX.set(theX);
    // animate("img", { x: theX }); // not suitable 😤
  };
  const opacity = useSpring(0, { bounce: 0, duration: 300 });
  const scale = useSpring(0.5, { bounce: 0 });
  const handleMouseEnter = () => {
    scale.set(1);
    opacity.set(1);
  };
  const handleMouseLeave = () => {
    scale.set(0.5);
    opacity.set(0);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      //   ref={scope}
      className="relative"
      onMouseMove={handleMouseOver}
    >
      <a
        rel="noreferrer"
        target="_blank"
        ref={textRef}
        className="text-gray-700 font-bold hover:underline"
      >
        {children}
      </a>
      ;
      <motion.img
        className="rounded-3xl border-4 border-gray-400 absolute bottom-6 -left-6 w-40"
        src={src}
        alt="preview"
        style={{
          x: springX,
          scale,
          opacity,
          transformOrigin: "bottom",
        }}
      />
    </div>
  );
};
