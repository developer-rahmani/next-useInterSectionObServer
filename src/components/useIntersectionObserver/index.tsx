"use client";

// !! Types
import { IntersectionObserverType } from "./index.types";

// !! Hooks
import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = ({ elementRef }: IntersectionObserverType) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    observer.current = new IntersectionObserver((entries) => {
      setEntry(entries[0]);
    });

    observer.current.observe(elementRef.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elementRef]);

  return entry?.isIntersecting;
};

export default useIntersectionObserver;
