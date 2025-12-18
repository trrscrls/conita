"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface ImageGalleryProps {
    isUnlocked: boolean;
}

// Only images 1-7, video is separate
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
    isUnlocked
}: {
    src: string;
    index: number;
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
            { threshold: 0.15, rootMargin: "0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isUnlocked]);

    // Alternate float direction for visual interest
    const floatDirection = index % 2 === 0 ? "translate-x-8" : "-translate-x-8";

    return (
        <div
            ref={ref}
            className={`
        relative rounded-2xl overflow-hidden glass-strong
        transition-all duration-1000 ease-out transform
        ${isVisible
                    ? "opacity-100 translate-y-0 translate-x-0 scale-100"
                    : `opacity-0 translate-y-16 ${floatDirection} scale-90`}
      `}
            style={{
                transitionDelay: `${index * 200}ms`,
            }}
        >
            <Image
                src={src}
                alt={`Momento especial ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}

export function ImageGallery({ isUnlocked }: ImageGalleryProps) {
    return (
        <div
            className={`
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
        transition-all duration-[2000ms] ease-out
        ${!isUnlocked ? "blur-xl opacity-50 pointer-events-none" : "blur-0 opacity-100"}
      `}
        >
            {GALLERY_IMAGES.map((src, index) => (
                <FloatingImage
                    key={index}
                    src={src}
                    index={index}
                    isUnlocked={isUnlocked}
                />
            ))}
        </div>
    );
}
