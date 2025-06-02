import {
  OnsiteJobHero,
  SearchFilterCompanies,
  ShowCompaniesWithFiltered,
} from "@/features/bd-tech-companies";

const OnsiteJobs = () => {
  return (
    <div>
      <OnsiteJobHero />
      <SearchFilterCompanies />
      <ShowCompaniesWithFiltered />
    </div>
  );
};

export default OnsiteJobs;
