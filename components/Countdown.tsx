"use client";

import { useEffect, useState } from "react";

interface CountdownDisplayProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function CountdownDigit({ value, label }: { value: number; label: string }) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 300);
        return () => clearTimeout(timer);
    }, [value]);

    return (
        <div className="flex flex-col items-center">
            <div
                className={`
          countdown-digit
          text-5xl sm:text-7xl md:text-8xl lg:text-9xl
          font-light
          text-white
          drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]
          transition-all duration-300 ease-out
          ${animate ? "scale-105 opacity-90" : "scale-100 opacity-100"}
        `}
                style={{
                    textShadow: "0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(255, 255, 255, 0.2)",
                }}
            >
                {value.toString().padStart(2, "0")}
            </div>
            <span className="text-white/60 text-xs sm:text-sm md:text-base font-light tracking-[0.3em] uppercase mt-2 sm:mt-4">
                {label}
            </span>
        </div>
    );
}

function Separator() {
    return (
        <div className="flex items-center justify-center h-full pb-8">
            <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/40 font-extralight animate-pulse-soft"
                style={{ lineHeight: 1 }}
            >
                :
            </span>
        </div>
    );
}

export function Countdown({ days, hours, minutes, seconds }: CountdownDisplayProps) {
    return (
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            <CountdownDigit value={days} label="días" />
            <Separator />
            <CountdownDigit value={hours} label="horas" />
            <Separator />
            <CountdownDigit value={minutes} label="minutos" />
            <Separator />
            <CountdownDigit value={seconds} label="segundos" />
        </div>
    );
}
