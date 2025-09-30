import { Footer } from "@/components/shared";
import { Hero2, ShowCompanies, ToolsList } from "@/features/homepage";

const RootPage = async () => {
	return (
		<div className="container mx-auto h-screen">
			<Hero2 />
			<ShowCompanies />
			<ToolsList />
			{/* <ShowContributors /> */}
			<Footer />
		</div>
	);
};

export default RootPage;
