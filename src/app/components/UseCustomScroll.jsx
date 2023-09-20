import { useScroll, useTransform } from "framer-motion";

export default function UseCustomScroll(customRef) {
  const { scrollYProgress } = useScroll({
    target: customRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: biggerScrollYProgress } = useScroll({
    target: customRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  const biggerScale = useTransform(biggerScrollYProgress, [0, 0.75], [1.2, 1]);

  return { scale, biggerScale };
}
