import { CompanyCardMini } from '@/components/shared';
import { companies } from '@/data/companies-data';

export const ShowCompaniesWithFiltered = () => {
  const companiesData = companies.slice(0, 9);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {companiesData.map((company, index) => (
          <CompanyCardMini key={index} company={company} />
        ))}
      </div>
    </section>
  );
};
