import {
	Archivo_Black,
	Instrument_Serif,
	Space_Grotesk,
} from "next/font/google";

const archivoBlack = Archivo_Black({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-head",
	display: "swap",
});

const space = Space_Grotesk({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-sans",
	display: "swap",
});

const instrumentSerif = Instrument_Serif({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-instrument-serif",
	display: "swap",
});

const fontList = [archivoBlack, space, instrumentSerif];

export const fontVariables = fontList.map((font) => font.variable);
