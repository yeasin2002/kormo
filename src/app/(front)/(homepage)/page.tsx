import { Footer } from '@/components/shared';
import {
  FinanceCto,
  Hero2,
  ShowCompanies,
  ShowContributors,
  SiteStatistics,
} from '@/features/homepage';

const RootPage = async () => {
  return (
    <div className="container mx-auto h-screen">
      <Hero2 />
      <SiteStatistics />
      <ShowCompanies />
      <FinanceCto />

      <ShowContributors />
      <Footer />
    </div>
  );
};

export default RootPage;
