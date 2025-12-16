"use client";

export function GlassmorphicBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Base gradient - Dark theme */}
            <div
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 70%),
            linear-gradient(135deg, #0a0a0f 0%, #121218 50%, #0f0f18 100%)
          `
                }}
            />

            {/* Floating shapes - Subtle glow */}
            <div
                className="floating-shape w-[600px] h-[600px] -top-32 -left-32 animate-float"
                style={{
                    animationDelay: "0s",
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)"
                }}
            />
            <div
                className="floating-shape w-[500px] h-[500px] top-1/2 -right-48 animate-float"
                style={{
                    animationDelay: "2s",
                    background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)"
                }}
            />
            <div
                className="floating-shape w-[400px] h-[400px] -bottom-32 left-1/3 animate-float"
                style={{
                    animationDelay: "4s",
                    background: "radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)"
                }}
            />
            <div
                className="floating-shape w-[300px] h-[300px] top-1/4 left-1/2 animate-float"
                style={{
                    animationDelay: "6s",
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)"
                }}
            />

            {/* Subtle noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Glass overlay */}
            <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10" />
        </div>
    );
}
