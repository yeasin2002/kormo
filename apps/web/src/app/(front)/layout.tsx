import { NavBar } from "@/components/shared";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
}
