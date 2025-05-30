import {
  FinanceCto,
  Hero2,
  ShowCompanies,
  ShowContributors,
  SiteStatistics,
} from "@/features/homepage";

const RootPage = () => {
  return (
    <div className="h-screen  container mx-auto">
      <Hero2 />
      <SiteStatistics />
      <ShowCompanies />
      <FinanceCto />

      <ShowContributors />
      <div className="h-5"></div>
    </div>
  );
};

export default RootPage;
