import type { Dispatch, SetStateAction } from "react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import type { PaginationMetaType } from "@/type";

interface Props extends React.ComponentProps<"div"> {
	paginationMeta: PaginationMetaType;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const PaginatingWithFunctionality = ({
	paginationMeta,
	currentPage,
	setCurrentPage,
}: Props) => {
	return (
		<Pagination className="mt-10">
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
									className={`cursor-pointer ${currentPage === page ? "font-bold" : ""}`}
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
	);
};
