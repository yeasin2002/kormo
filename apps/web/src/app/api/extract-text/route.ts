import { type NextRequest, NextResponse } from "next/server";
import pdf from "pdf-parse/lib/pdf-parse.js";

export const runtime = "nodejs";

interface PdfParseResponse {
	numpages: number;
	numrender: number;
	info: unknown;
	metadata: unknown;
	version: string;
	text: string;
}

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const file = formData.get("file") as File | null;

		if (!file) {
			return NextResponse.json({ error: "No file provided" }, { status: 400 });
		}

		if (file.type !== "application/pdf") {
			return NextResponse.json(
				{ error: "Invalid file type. Only PDFs are allowed." },
				{ status: 400 },
			);
		}

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const data: PdfParseResponse = await pdf(buffer);

		return NextResponse.json({ text: data.text });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "An error occurred while processing the PDF." },
			{ status: 500 },
		);
	}
}
