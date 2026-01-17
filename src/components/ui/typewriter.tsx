import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const Typewriter = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
}: TypewriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentFullText = useMemo(() => texts[currentTextIndex], [texts, currentTextIndex]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentFullText) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && currentText === "") {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      // Type or delete
      timeout = setTimeout(
        () => {
          setCurrentText((prev) =>
            isDeleting
              ? prev.slice(0, -1)
              : currentFullText.slice(0, prev.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentFullText, texts.length, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-accent ml-0.5 align-middle"
      />
    </span>
  );
};

export default Typewriter;
