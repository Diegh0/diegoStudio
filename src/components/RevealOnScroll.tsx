"use client";

import { CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  distance?: number;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  style,
  distance = 36,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${distance}px)`,
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s,
                     transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
