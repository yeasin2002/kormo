import { CompanyCardMini } from '@/components/shared';
import { db, schema } from '@/db';

export const ShowCompaniesWithFiltered = async () => {
  const companiesData = await db.select().from(schema.companies).limit(20);

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
