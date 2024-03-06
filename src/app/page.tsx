"use client";

import useIntersectionObserver from "@/components/useIntersectionObserver";
import { useRef } from "react";

const Home = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver({ elementRef: targetRef });

  return (
    <div>
      <div className="w-full h-[42px] flex bg-gray-900 sticky top-0 text-gray-200">
        isVisible : {isVisible ? "Yes" : "No"}
      </div>
      <div className="w-full h-screen flex"></div>
      <div className="w-full h-screen flex"></div>

      <div
        ref={targetRef}
        className="h-[100px] w-full flex bg-gray-900 text-gray-200"
      >
        secion 1
      </div>
    </div>
  );
};

export default Home;
