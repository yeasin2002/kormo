import {
  OnsiteJobHero,
  ShowCompaniesWithFiltered,
} from "@/features/onsite-jobs";

const OnsiteJobs = () => {
  return (
    <div>
      <OnsiteJobHero />
      <ShowCompaniesWithFiltered />
    </div>
  );
};

export default OnsiteJobs;
