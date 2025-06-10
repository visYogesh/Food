import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface LandingPageProps {
  children: React.ReactNode;
}

const LandingPage: React.FC<LandingPageProps> = ({ children }) => {
  const [blastEnd, setBlastEnd] = useState(false);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const [hideSplashCompletely, setHideSplashCompletely] = useState(false);

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setBlastEnd(true);
      setFadeOutSplash(true); // start fading splash
      setTimeout(() => setHideSplashCompletely(true), 500); // hide splash completely after fade
    }, 2000);

    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: 25,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
      });
      confetti({
        particleCount: 25,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
      });
    }, 400);

    const confettiStop = setTimeout(() => clearInterval(confettiInterval), 2000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(confettiStop);
      clearInterval(confettiInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Splash */}
      {!hideSplashCompletely && (
        <div
          className={`fixed inset-0 bg-gray-900 flex items-center justify-center z-50 overflow-hidden transition-opacity duration-1000 ${
            fadeOutSplash ? "opacity-0" : "opacity-100"
          } ${blastEnd ? "animate-zoomOut" : ""}`}
        >
          {/* Blobs */}
          <svg className="absolute -top-40 -left-40 w-[600px] h-[600px]" viewBox="0 0 600 600">
            <g transform="translate(300,300)">
              <path
                fill="#FF6B6B"
                opacity="0.7"
                d="M120,-150C144,-130,162,-108,175,-85C188,-62,196,-38,200,-12C204,14,204,40,191,60C178,80,152,94,127,110C102,126,78,144,52,152C26,160,-2,158,-26,146C-50,134,-70,112,-90,92C-110,72,-130,54,-148,32C-166,10,-182,-14,-176,-34C-170,-54,-142,-70,-116,-88C-90,-106,-68,-126,-44,-144C-20,-162,4,-178,30,-182C56,-186,84,-178,120,-150Z"
              />
            </g>
          </svg>
          <svg className="absolute -bottom-40 -right-40 w-[500px] h-[500px]" viewBox="0 0 600 600">
            <g transform="translate(300,300)">
              <path
                fill="#FFD93D"
                opacity="0.7"
                d="M98,-134C126,-116,154,-98,168,-75C182,-52,182,-26,182,2C182,30,182,60,168,86C154,112,126,133,98,148C70,163,42,171,16,163C-10,155,-34,131,-59,114C-84,97,-110,88,-134,71C-158,54,-180,29,-188,0C-196,-29,-190,-58,-179,-83C-168,-108,-152,-129,-132,-149C-112,-169,-89,-188,-60,-197C-31,-206,1,-205,28,-195C55,-185,78,-166,98,-134Z"
              />
            </g>
          </svg>

          {/* Smoke */}
          <div className="absolute inset-0 pointer-events-none">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute bg-white opacity-10 rounded-full blur-2xl"
                style={{
                  animation: "drift 6s ease-in-out infinite",
                  animationDelay: `${i * 1.5}s`,
                  left: `${25 + i * 25}%`,
                  top: `${30 + i * 10}%`,
                  width: `${100 + i * 40}px`,
                  height: `${100 + i * 40}px`,
                }}
              />
            ))}
          </div>

          {/* Text */}
          <h1 className="relative z-10 text-6xl font-extrabold text-white animate-typing">
            SMOKED FUSION
          </h1>
        </div>
      )}

      {/* Main content */}
      <div
        className={`transition-opacity duration-1000 ${
          fadeOutSplash ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default LandingPage;
