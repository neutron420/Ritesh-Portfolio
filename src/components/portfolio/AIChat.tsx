"use client";
import React, { useState } from "react";
import { AIAssistantCard } from "../ai-assistant-card";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-2xl flex items-center justify-center hover:bg-accent/90 transition-all border border-white/10"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 z-[9999] w-[calc(100vw-40px)] sm:w-[400px] max-h-[calc(100vh-140px)] overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-border/50 bg-card/80 backdrop-blur-xl flex flex-col"
          >
            <div className="flex-1 overflow-y-auto custom-scrollbar pt-2">
              <AIAssistantCard />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
