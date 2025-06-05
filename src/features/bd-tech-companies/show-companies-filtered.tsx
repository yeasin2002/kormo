import { CompanyCardMini } from '@/components/shared';
import { companies } from '@/data';

export const ShowCompaniesWithFiltered = () => {
  const companiesData = companies;

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {companiesData.map((company, index) => (
          <CompanyCardMini
            key={index}
            company={{
              company_name: company.company_name,
              no_of_software_engineers: company.no_of_software_engineers,
              office_location: company.office_location,
              technologies: company.technologies,
              web_presence: company.web_presence,
            }}
          />
        ))}
      </div>
    </section>
  );
};
