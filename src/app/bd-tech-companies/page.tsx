import {
  OnsiteJobHero,
  SearchFilterCompanies,
  ShowCompaniesWithFiltered,
} from "@/features/onsite-jobs";

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
