// app/api/ocr/route.ts
import { type NextRequest, NextResponse } from "next/server";
import Tesseract from "tesseract.js";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const files = formData.getAll("images");

		if (files.length < 1 || files.length > 5) {
			return NextResponse.json(
				{ error: "Please upload between 1 and 5 images." },
				{ status: 400 },
			);
		}

		const texts = await Promise.all(
			files.map(async (file) => {
				if (!(file instanceof File)) {
					return "";
				}
				const buffer = Buffer.from(await file.arrayBuffer());
				const {
					data: { text },
				} = await Tesseract.recognize(buffer, "eng");
				return text;
			}),
		);

		return NextResponse.json({ texts });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
