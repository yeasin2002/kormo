import { CompanyCardMini } from '@/components/shared';
import { CardSkeleton } from '@/components/skeletons';
import { companies } from '@/db/schema/companies';

interface ShowCompaniesWithFilteredProps {
  companies: (typeof companies.$inferSelect)[];
  isLoading: boolean;
}

export const ShowCompaniesWithFiltered = ({
  companies,
  isLoading,
}: ShowCompaniesWithFilteredProps) => {
  const loadingContent = Array.from({ length: 9 }, (_, index) => index);

  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {!isLoading &&
          companies.map((company, index) => (
            <CompanyCardMini key={`${company.company_name}-${index}`} company={company} />
          ))}

        {isLoading && loadingContent.map((index) => <CardSkeleton key={index} />)}
      </div>
    </section>
  );
};
