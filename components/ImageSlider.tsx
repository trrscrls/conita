"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageSliderProps {
    isUnlocked: boolean;
    images: string[];
}

export function ImageSlider({ isUnlocked, images }: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (!isUnlocked || isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isUnlocked, isTransitioning, images.length]);

    const prevSlide = useCallback(() => {
        if (!isUnlocked || isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 500);
    }, [isUnlocked, isTransitioning, images.length]);

    // Auto-play when unlocked
    useEffect(() => {
        if (!isUnlocked) return;

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isUnlocked, nextSlide]);

    return (
        <div
            className={`
        relative w-full max-w-4xl mx-auto aspect-[16/10] rounded-3xl overflow-hidden
        glass-strong
        transition-all duration-[2000ms] ease-out
        ${isUnlocked ? "content-unlocked" : "content-locked"}
      `}
        >
            {/* Images */}
            <div className="relative w-full h-full">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`
              absolute inset-0 transition-opacity duration-500 ease-in-out
              ${index === currentIndex ? "opacity-100" : "opacity-0"}
            `}
                    >
                        <Image
                            src={src}
                            alt={`Momento romántico ${index + 1}`}
                            fill
                            className="object-cover animate-slow-zoom"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10 pointer-events-none" />

            {/* Navigation buttons - only visible when unlocked */}
            {isUnlocked && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/30 transition-all duration-300"
                        aria-label="Imagen anterior"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/30 transition-all duration-300"
                        aria-label="Siguiente imagen"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => isUnlocked && setCurrentIndex(index)}
                        className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentIndex ? "bg-white w-6" : "bg-white/50"}
              ${!isUnlocked && "pointer-events-none"}
            `}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
