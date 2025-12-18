"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { Countdown } from "@/components/Countdown";
import { LoveLetter } from "@/components/LoveLetter";
import { FloatingImages } from "@/components/FloatingImages";
import { FooterVideo } from "@/components/FooterVideo";
import { GlassmorphicBackground } from "@/components/GlassmorphicBackground";
import { FloralDecoration } from "@/components/FloralDecoration";
import { BackgroundMusic } from "@/components/BackgroundMusic";

// Target date: January 15, 2026 at 00:00 (user's local time)
const TARGET_DATE = new Date(2024, 0, 15, 0, 0, 0);

export default function Home() {
    const { timeLeft, isUnlocked, isLoading } = useCountdown(TARGET_DATE);

    // Prevent hydration mismatch by not rendering until client-side
    if (isLoading) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <GlassmorphicBackground />
            </main>
        );
    }

    return (
        <main className="min-h-screen relative">
            {/* Background */}
            <GlassmorphicBackground />

            {/* Background Music */}
            <BackgroundMusic src="/bg_sound.mp3" />

            {/* Floral decorations */}
            <FloralDecoration isUnlocked={isUnlocked} />

            {/* Main content */}
            <div className="relative z-10">
                {!isUnlocked ? (
                    // LOCKED STATE: Only show countdown
                    <div className="min-h-screen flex items-center justify-center p-4">
                        <div className="text-center animate-fade-in">
                            <Countdown
                                days={timeLeft.days}
                                hours={timeLeft.hours}
                                minutes={timeLeft.minutes}
                                seconds={timeLeft.seconds}
                            />
                        </div>
                    </div>
                ) : (
                    // UNLOCKED STATE: Show full content
                    <div className="min-h-screen py-12 px-4 sm:py-16 md:py-20">
                        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 md:space-y-32">
                            {/* Hero section */}
                            <section className="text-center animate-fade-in">
                                <h1 className="romantic-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg mb-6">
                                    Felices 21 añitos conita
                                </h1>
                                <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto">
                                    Since 15 de Enero de 2005
                                </p>
                            </section>

                            {/* Letter with floating images around it */}
                            <section>
                                <FloatingImages isUnlocked={isUnlocked}>
                                    <LoveLetter isUnlocked={isUnlocked} />
                                </FloatingImages>
                            </section>

                            {/* Video footer */}
                            <FooterVideo isUnlocked={isUnlocked} />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

