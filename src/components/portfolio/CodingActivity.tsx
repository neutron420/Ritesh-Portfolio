import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";

const CodingActivity = () => {
  const [elapsedTime, setElapsedTime] = useState({ minutes: 0, seconds: 0 });
  const [isActive] = useState(true);

  // Simulate coding session - starts with random time and increments
  useEffect(() => {
    // Random initial time between 5-45 minutes
    const initialMinutes = Math.floor(Math.random() * 40) + 5;
    const initialSeconds = Math.floor(Math.random() * 60);
    setElapsedTime({ minutes: initialMinutes, seconds: initialSeconds });

    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        const newSeconds = prev.seconds + 1;
        if (newSeconds >= 60) {
          return { minutes: prev.minutes + 1, seconds: 0 };
        }
        return { ...prev, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (mins: number, secs: number) => {
    return `${mins}m ${secs}s`;
  };

  return (
    <motion.div
      className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card/60 border border-border/50 hover:border-accent/30 transition-all"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {/* Status indicator */}
      <div className="relative">
        <motion.div
          className="w-2 h-2 rounded-full bg-green-500"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 w-2 h-2 rounded-full bg-green-500"
          animate={{
            scale: [1, 2.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </div>

      {/* VS Code icon */}
      <VscCode className="w-4 h-4 text-[#007ACC]" />

      {/* Activity text */}
      <div className="flex items-center gap-1.5 text-sm">
        <span className="text-muted-foreground">Coding in</span>
        <span className="font-medium text-foreground">VS Code</span>
        <span className="text-muted-foreground">for</span>
        <span className="font-mono text-accent tabular-nums">
          {formatTime(elapsedTime.minutes, elapsedTime.seconds)}
        </span>
      </div>
    </motion.div>
  );
};

export default CodingActivity;
