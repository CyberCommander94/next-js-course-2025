"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";
import { ArrowUpFromLine } from "lucide-react"

const ScrollToTopButton: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      size="lg"
      variant="outline"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`transition-opacity duration-300 dark:bg-background dark:hover:bg-secondary border border-foreground dark:border text-center hover:text-white hover:bg-foreground dark:text-white dark:border-input fixed bottom-20 right-6 shadow-lg ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUpFromLine strokeWidth={1} />
    </Button>
  );
}

export default ScrollToTopButton;
