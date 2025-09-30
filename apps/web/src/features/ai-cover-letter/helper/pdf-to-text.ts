export const extractTextFromPdf = async (
	file: File,
): Promise<{ text: string }> => {
	const formData = new FormData();
	formData.append("file", file);

	const response = await fetch("/api/extract-text", {
		method: "POST",
		body: formData,
	});

	if (!response.ok) {
		const errorData = await response.json();
		throw new Error(errorData.error || "Something went wrong");
	}

	return response.json();
};
