import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Para conita",
    description: "¡Feliz cumpleaños!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
