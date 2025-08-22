// export default function Loader() {
//   return (
//     <div className="fixed inset-0 bg-[#0D0F14] flex items-center justify-center z-[9999]">
//       <div className="relative w-48 h-[2px] bg-gray-800 overflow-hidden">
//         <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-600 to-orange-400 animate-loaderLine"></div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { CSSProperties, useEffect, useRef } from "react";
import Image from "next/image";

type LoaderProps = {
  onFinish?: () => void;
  holdMs?: number;     // wait before fading
  fadeMs?: number;     // fade duration
  logoSrc?: string;
  logoAlt?: string;
};

const Loader: React.FC<LoaderProps> = ({
  onFinish,
  holdMs = 2000,
  fadeMs = 400,
  logoSrc = "/whitelogo.png",
  logoAlt = "Logo",
}) => {
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onFinish?.();
  };

  // Fallback if animations don't fire
  useEffect(() => {
    const total = holdMs + fadeMs + 50;
    const id = window.setTimeout(finish, total);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [holdMs, fadeMs]);

  const wrapperStyle: CSSProperties = {
    animationName: "loaderFadeOut",
    animationDuration: `${fadeMs}ms`,
    animationDelay: `${holdMs}ms`,
    animationTimingFunction: "ease",
    animationFillMode: "forwards",
  };

  const lineStyle: CSSProperties = {
    animation: "loaderLine 1.2s ease-in-out infinite",
  };

  const handleAnimEnd: React.AnimationEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget !== e.target) return; // ignore child animations
    finish();
  };

  return (
    <>
      <div
        role="status"
        aria-live="polite"
        aria-busy="true"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0D0F14]"
        style={wrapperStyle}
        onAnimationEnd={handleAnimEnd}
      >
        <div className="flex flex-col items-center space-y-6">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={130}
            height={100}
            priority
            className="h-[100px] w-auto"
          />

          {/* Progress line */}
          <div className="relative w-56 h-[2px] bg-gray-700/60 overflow-hidden rounded">
            <div
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-orange-500 to-orange-400"
              style={lineStyle}
            />
          </div>

          <span className="sr-only">Loading…</span>
        </div>
      </div>

      {/* Keyframes without touching tailwind.config */}
      <style jsx global>{`
        @keyframes loaderFadeOut {
          0% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
        @keyframes loaderLine {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(30%); }
          100% { transform: translateX(100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [role="status"] { animation: none !important; }
          .relative .absolute { animation: none !important; }
        }
      `}</style>
    </>
  );
};

export default Loader;


