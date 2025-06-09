import { buttonVariants } from '@/components/retroui';
import { CompanyCardMini } from '@/components/shared';

import { db } from '@/db';
import { companies } from '@/db/schema/companies';
import Link from 'next/link';

export const ShowCompanies = async () => {
  const companiesData = await db.select().from(companies).limit(6);

  return (
    <section className="container mx-auto mb-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {companiesData.map((company, index) => (
          <CompanyCardMini key={index} company={company} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={'/bd-tech-companies'}
          className={buttonVariants({
            className: 'mx-auto mt-10 inline-block px-10 py-2 text-xl',
            variant: 'outline',
          })}
        >
          See All
        </Link>
      </div>
    </section>
  );
};
