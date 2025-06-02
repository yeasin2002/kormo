import { CompanyCardMini } from "@/components/shared";
import { companies } from "@/data";

export const ShowCompanies = () => {
  const companiesData = companies.slice(0, 8);
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companiesData.map((company, index) => (
          <CompanyCardMini
            key={index}
            company={{
              company_name: company.company_name,
              office_location: company.office_location,
              no_of_software_engineers: company.no_of_software_engineers,
              technologies: company.technologies,
              web_presence: company.web_presence,
            }}
          />
        ))}
      </div>
    </section>
  );
};
