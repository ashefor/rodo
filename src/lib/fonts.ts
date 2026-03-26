import { Inter, Archivo_Black, Plus_Jakarta_Sans } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const archivoBlack = Archivo_Black({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-archivo-black",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-plus-jakarta-sans",
});

export const fontVariableClass = `${inter.variable} ${archivoBlack.variable} ${plusJakartaSans.variable}`;
