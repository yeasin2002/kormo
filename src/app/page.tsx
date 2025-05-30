import { Hero, ShowCompanies, ShowContributors } from "@/features/homepage";

const RootPage = () => {
  return (
    <div className="h-screen  ">
      <Hero />
      <ShowCompanies />
      <ShowContributors />

      <div className="h-5"></div>
    </div>
  );
};

export default RootPage;
