import { companies } from "@/data";
import { CompanyCard } from "../homepage/company-cards";

export const ShowCompaniesWithFiltered = () => {
  const companiesData = companies.slice(0, 4);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {companiesData.map((company, index) => (
          <CompanyCard
            key={index}
            company={{
              CompanyName: company.company_name,
              OfficeLocation: company.office_location,
              teamMembers: company.no_of_software_engineers,
              Technologies: company.technologies,
              WebPresence: company.web_presence,
            }}
          />
        ))}
      </div>
    </section>
  );
};
