"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface FloatingImagesProps {
    isUnlocked: boolean;
    children: React.ReactNode;
}

const GALLERY_IMAGES = [
    getAssetPath("/Imagenes/1.jpg"),
    getAssetPath("/Imagenes/2.jpg"),
    getAssetPath("/Imagenes/3.jpg"),
    getAssetPath("/Imagenes/4.JPG"),
    getAssetPath("/Imagenes/5.PNG"),
    getAssetPath("/Imagenes/6.png"),
    getAssetPath("/Imagenes/7.jpg"),
];

function FloatingImage({
    src,
    index,
    side,
    isUnlocked
}: {
    src: string;
    index: number;
    side: "left" | "right";
    isUnlocked: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isUnlocked) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2, rootMargin: "100px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isUnlocked]);

    const floatFrom = side === "left" ? "-translate-x-20" : "translate-x-20";

    return (
        <div
            ref={ref}
            className={`
        relative overflow-hidden rounded-2xl
        bg-black/20 backdrop-blur-sm
        shadow-xl shadow-black/30
        transition-all duration-1000 ease-out transform
        ${isVisible
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : `opacity-0 ${floatFrom} translate-y-8`}
      `}
            style={{
                transitionDelay: `${index * 150}ms`,
            }}
        >
            <Image
                src={src}
                alt={`Momento especial ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
                sizes="(max-width: 768px) 150px, 200px"
            />
        </div>
    );
}

export function FloatingImages({ isUnlocked, children }: FloatingImagesProps) {
    // Split images into left and right columns
    const leftImages = GALLERY_IMAGES.filter((_, i) => i % 2 === 0); // 1, 3, 5, 7
    const rightImages = GALLERY_IMAGES.filter((_, i) => i % 2 === 1); // 2, 4, 6

    return (
        <div
            className={`
        relative w-full
        transition-all duration-[2000ms] ease-out
        ${!isUnlocked ? "blur-xl opacity-50 pointer-events-none" : "blur-0 opacity-100"}
      `}
        >
            {/* Container for floating layout */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">

                {/* Left floating images - hidden on mobile, shown on lg+ */}
                <div className="hidden lg:flex flex-col gap-6 w-48 xl:w-56 flex-shrink-0 sticky top-24">
                    {leftImages.map((src, i) => (
                        <FloatingImage
                            key={src}
                            src={src}
                            index={i * 2}
                            side="left"
                            isUnlocked={isUnlocked}
                        />
                    ))}
                </div>

                {/* Center content (the letter) */}
                <div className="flex-1 min-w-0">
                    {children}

                    {/* Mobile: Show all images below the content */}
                    <div className="lg:hidden grid grid-cols-2 gap-4 mt-12">
                        {GALLERY_IMAGES.map((src, i) => (
                            <FloatingImage
                                key={src}
                                src={src}
                                index={i}
                                side={i % 2 === 0 ? "left" : "right"}
                                isUnlocked={isUnlocked}
                            />
                        ))}
                    </div>
                </div>

                {/* Right floating images - hidden on mobile, shown on lg+ */}
                <div className="hidden lg:flex flex-col gap-6 w-48 xl:w-56 flex-shrink-0 sticky top-24">
                    {rightImages.map((src, i) => (
                        <FloatingImage
                            key={src}
                            src={src}
                            index={i * 2 + 1}
                            side="right"
                            isUnlocked={isUnlocked}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
