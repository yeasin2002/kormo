import { techCompanies } from "@/data";
import { CompanyCard } from "./company-cards";

export const ShowCompanies = () => {
  const companiesData = techCompanies.slice(0, 10);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {companiesData.map((company, index) => (
          <CompanyCard
            key={index}
            company={{
              CompanyName: company.CompanyName,
              OfficeLocation: company.OfficeLocation,
              teamMembers: company.TeamMembers,
              Technologies: company.Technologies,
              WebPresence: company.WebPresence,
            }}
          />
        ))}
      </div>
    </section>
  );
};
