'use client';

import { type Company } from '@/data/companies-data';
import {
  OnsiteJobHero,
  SearchFilterCompanies,
  ShowCompaniesWithFiltered,
} from '@/features/bd-tech-companies';
import { useEffect, useState } from 'react';

import { filterCompaniesWithPagination } from '@/actions/companies-search.actions';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const PAGE_SIZE = 10;

const OnsiteJobs = () => {
  const [searchValue, setSearchValue] = useState('');
  const [techValues, setTechValue] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [companies, setCompanies] = useState<Company[]>([]);
  const [paginationMeta, setPaginationMeta] = useState({
    currentPage: 1,
    totalPages: 1,
    pageSize: PAGE_SIZE,
    totalItems: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setIsLoading(true);
        const result = await filterCompaniesWithPagination({
          searchValue,
          techValue: techValues,
          page: currentPage,
          pageSize: PAGE_SIZE,
        });

        setCompanies(result.data);
        setPaginationMeta(result.metadata);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, [currentPage, searchValue, techValues]);

  console.log(companies);
  return (
    <div>
      <OnsiteJobHero />
      <SearchFilterCompanies
        techValue={techValues}
        setTechValue={setTechValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ShowCompaniesWithFiltered companies={companies} isLoading={isLoading} />

      {paginationMeta.totalPages > 1 && (
        <Pagination className="my-10">
          <PaginationContent>
            {paginationMeta.hasPreviousPage && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="cursor-pointer"
                />
              </PaginationItem>
            )}

            {Array.from({ length: paginationMeta.totalPages }, (_, i) => i + 1)
              .filter((page) => {
                const distance = Math.abs(page - currentPage);
                return (
                  distance === 0 ||
                  distance === 1 ||
                  page === 1 ||
                  page === paginationMeta.totalPages
                );
              })
              .map((page, index, array) => {
                if (index > 0 && array[index - 1] !== page - 1) {
                  return (
                    <PaginationItem key={`ellipsis-${page}`}>
                      <span className="px-4">...</span>
                    </PaginationItem>
                  );
                }
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      className={`cursor-pointer ${currentPage === page ? 'font-bold' : ''}`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

            {paginationMeta.hasNextPage && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="cursor-pointer"
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default OnsiteJobs;
