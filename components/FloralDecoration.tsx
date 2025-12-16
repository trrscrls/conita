"use client";

interface FloralDecorationProps {
    isUnlocked: boolean;
}

// SVG components for flowers - Dark theme (soft glow)
function Sunflower({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
            {/* Petals */}
            {[...Array(12)].map((_, i) => (
                <ellipse
                    key={i}
                    cx="50"
                    cy="20"
                    rx="8"
                    ry="18"
                    fill="rgba(250, 204, 21, 0.3)"
                    stroke="rgba(250, 204, 21, 0.2)"
                    strokeWidth="0.5"
                    transform={`rotate(${i * 30} 50 50)`}
                />
            ))}
            {/* Center */}
            <circle cx="50" cy="50" r="15" fill="rgba(180, 83, 9, 0.4)" />
            <circle cx="50" cy="50" r="12" fill="rgba(180, 83, 9, 0.3)" />
        </svg>
    );
}

function Lily({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="none">
            {/* Petals */}
            {[...Array(6)].map((_, i) => (
                <path
                    key={i}
                    d="M50 10 Q40 40 50 60 Q60 40 50 10"
                    fill="rgba(244, 114, 182, 0.3)"
                    stroke="rgba(244, 114, 182, 0.2)"
                    strokeWidth="0.5"
                    transform={`rotate(${i * 60} 50 50)`}
                />
            ))}
            {/* Stamen */}
            <circle cx="50" cy="50" r="8" fill="rgba(251, 207, 232, 0.3)" />
        </svg>
    );
}

export function FloralDecoration({ isUnlocked }: FloralDecorationProps) {
    return (
        <div
            className={`
        fixed inset-0 pointer-events-none overflow-hidden z-0
        transition-all duration-[3000ms] ease-out
        ${isUnlocked ? "opacity-100" : "opacity-30 blur-[10px]"}
      `}
        >
            {/* Top left sunflower */}
            <div className="absolute -top-16 -left-16 parallax-element" style={{ animationDelay: "0s" }}>
                <Sunflower className="w-48 h-48 opacity-40" />
            </div>

            {/* Top right lily */}
            <div className="absolute -top-8 -right-8 parallax-element" style={{ animationDelay: "2s" }}>
                <Lily className="w-40 h-40 opacity-50 rotate-45" />
            </div>

            {/* Bottom left lily */}
            <div className="absolute -bottom-12 left-20 parallax-element" style={{ animationDelay: "4s" }}>
                <Lily className="w-36 h-36 opacity-40 -rotate-30" />
            </div>

            {/* Bottom right sunflower */}
            <div className="absolute -bottom-20 -right-20 parallax-element" style={{ animationDelay: "1s" }}>
                <Sunflower className="w-56 h-56 opacity-35" />
            </div>

            {/* Middle decorations */}
            <div className="absolute top-1/3 -left-10 parallax-element" style={{ animationDelay: "3s" }}>
                <Lily className="w-28 h-28 opacity-30 rotate-12" />
            </div>

            <div className="absolute top-1/2 -right-6 parallax-element" style={{ animationDelay: "5s" }}>
                <Sunflower className="w-32 h-32 opacity-25" />
            </div>

            {/* Scattered small flowers */}
            <div className="absolute top-1/4 left-1/4 parallax-element" style={{ animationDelay: "2.5s" }}>
                <Lily className="w-16 h-16 opacity-20" />
            </div>

            <div className="absolute bottom-1/3 right-1/4 parallax-element" style={{ animationDelay: "4.5s" }}>
                <Sunflower className="w-20 h-20 opacity-20" />
            </div>
        </div>
    );
}
