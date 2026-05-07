"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

export interface MarkerHighlightProps {
  before?: string;
  highlight: string;
  after?: string;
  markerColor?: string;
  className?: string;
  delay?: number;
}

export function MarkerHighlight({
  before = "",
  highlight,
  after = "",
  markerColor = "#facc15",
  className,
  delay = 0,
}: MarkerHighlightProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  return (
    <span ref={ref} className={className}>
      {before}
      <span style={{ position: "relative", display: "inline-block" }}>
        <motion.span
          aria-hidden
          style={{
            position: "absolute",
            inset: "0 -0.1em",
            background: markerColor,
            transformOrigin: "left center",
            zIndex: 0,
            borderRadius: "0.15em",
          }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: 0.6,
            delay: delay + 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        <span style={{ position: "relative", zIndex: 1 }}>{highlight}</span>
      </span>
      {after}
    </span>
  );
}
