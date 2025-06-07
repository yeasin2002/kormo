import { CompanyCardMini } from '@/components/shared';

import { db } from '@/db';
import { companies } from '@/db/schema/companies';

export const ShowCompanies = async () => {
  const companiesData = await db.select().from(companies).limit(9);
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
