"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
};

export default function Reveal({
  children,
  className,
  style,
  delay = 0,
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const baseStyle: CSSProperties = { ...style, animationDelay: `${delay}ms` };

  return (
    <Tag
      ref={ref as any}
      style={baseStyle}
      className={`${visible ? "animate-fade-up" : "opacity-0"} will-change-transform ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
