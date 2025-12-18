"use client";

import { useEffect, useRef } from "react";
import { getAssetPath } from "@/lib/utils";

interface FooterVideoProps {
    isUnlocked: boolean;
}

export function FooterVideo({ isUnlocked }: FooterVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    // Ensure video plays when unlocked
    useEffect(() => {
        if (isUnlocked && videoRef.current) {
            // Small delay to ensure DOM is ready
            const timer = setTimeout(() => {
                videoRef.current?.play().catch(() => {
                    // Autoplay might be blocked, that's ok
                });
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isUnlocked]);

    return (
        <footer
            className={`
        w-full py-12 px-4
        transition-all duration-[2000ms] ease-out
        ${!isUnlocked ? "blur-xl opacity-30 pointer-events-none" : "blur-0 opacity-100"}
      `}
        >
            <div className="max-w-md mx-auto">
                {/* Video container - 9:16 aspect ratio */}
                <div className="relative rounded-3xl overflow-hidden glass-strong shadow-2xl">
                    <div className="relative w-full aspect-[9/16]">
                        <video
                            ref={videoRef}
                            src={getAssetPath("/Imagenes/8.mp4")}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            Tu navegador no soporta videos.
                        </video>
                    </div>

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                </div>
            </div>
        </footer>
    );
}
