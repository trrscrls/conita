"use client";

import { useEffect, useRef, useState } from "react";

interface BackgroundMusicProps {
    src: string;
}

export function BackgroundMusic({ src }: BackgroundMusicProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Attempt autoplay on mount
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // Try to play immediately
        const playAudio = async () => {
            try {
                await audio.play();
            } catch {
                // If blocked, try playing on first user interaction
                const handleInteraction = () => {
                    audio.play().catch(() => { });
                    document.removeEventListener("click", handleInteraction);
                    document.removeEventListener("touchstart", handleInteraction);
                };
                document.addEventListener("click", handleInteraction);
                document.addEventListener("touchstart", handleInteraction);
            }
        };

        playAudio();
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => { });
            }
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={src}
                loop
                autoPlay
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {/* Floating music control button */}
            <button
                onClick={togglePlay}
                className={`
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          glass-strong
          flex items-center justify-center
          text-white/70 hover:text-white
          transition-all duration-300
          hover:scale-110
          ${isPlaying ? "animate-pulse-soft" : ""}
        `}
                aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
                title={isPlaying ? "Pausar música" : "Reproducir música"}
            >
                {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>
        </>
    );
}
