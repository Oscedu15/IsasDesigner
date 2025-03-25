import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://isasdesigner.vercel.app/"),
    title: "Modern Design Tool Landing Page",
    description: "Created with the help of Frontend Tribe",
    openGraph: {
        url: "https://isasdesigner.vercel.app/",
        images: [
            {
                url: "/logo.png", // Ruta relativa a la imagen en la carpeta public
                width: 1200, // Ancho de la imagen
                height: 630, // Alto de la imagen
                alt: "Osc FrontEnd", // Texto alternativo para la imagen
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
