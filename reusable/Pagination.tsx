import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  //   gotoPage: (page: number) => void;
  previousPage: () => void;
  nextPage: () => void;
}
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pageCount,
  //   gotoPage,
  previousPage,
  nextPage,
}) => {
  return (
    <div className="flex space-x-2 items-center">
      <Button onClick={previousPage} disabled={currentPage === 1}>
        Previous
      </Button>
      <span className="mx-2">
        Page {currentPage } of {isNaN(pageCount) ? 1 : pageCount}
      </span>
      <Button onClick={nextPage} disabled={currentPage === pageCount}>
        Next
      </Button>
    </div>
  );
};
