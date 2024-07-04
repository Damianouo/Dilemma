/* eslint-disable react/prop-types */
import { useCreationCtx } from "../../hooks/useCreationCtx";
import Button from "../UI/Button";
import ChevronLeftSvg from "../svgs/ChevronLeftSvg";
import ChevronRightSvg from "../svgs/ChevronRightSvg";
const PageButtons = () => {
  const { creation, handler } = useCreationCtx();
  const currentPage = creation.pageNum;
  const totalEntries = creation.content.entries.length;
  const totalDisplayedEntries = 10;
  const totalPages = Math.ceil(totalEntries / totalDisplayedEntries);

  const pageButtonArr = [];
  if (totalEntries > 0) {
    for (let i = 2; i < totalPages; i++) {
      pageButtonArr.push(i);
    }
  }
  let slicedPageBtnArr = pageButtonArr.slice(0);

  if (totalPages > 7) {
    if (currentPage < 3) {
      slicedPageBtnArr = pageButtonArr.slice(0, 5);
    } else if (currentPage + 5 >= totalPages) {
      slicedPageBtnArr = pageButtonArr.slice(-5);
    } else {
      slicedPageBtnArr = pageButtonArr.slice(currentPage - 2, currentPage + 3);
    }
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        className="bg-secondary-600 px-6 text-primary-200 disabled:bg-primary-300 disabled:text-primary-400"
        disabled={currentPage === 1}
        onClick={handler.previousPage}
      >
        <ChevronLeftSvg />
      </Button>

      <PageBtn pageNum={1}>1</PageBtn>
      {slicedPageBtnArr.map((pageNum) => (
        <PageBtn key={"pageBtn" + pageNum} pageNum={pageNum}>
          {pageNum}
        </PageBtn>
      ))}
      <PageBtn pageNum={totalPages}>{totalPages}</PageBtn>

      <Button
        className="bg-secondary-600 px-6 text-primary-200 disabled:bg-primary-300 disabled:text-primary-400"
        disabled={currentPage === totalPages}
        onClick={handler.nextPage}
      >
        <ChevronRightSvg />
      </Button>
    </div>
  );
};

export default PageButtons;

const PageBtn = ({ pageNum }) => {
  const { creation, handler } = useCreationCtx();
  return (
    <Button
      className="h-10 w-10 bg-primary-300 outline outline-0 outline-secondary-600 disabled:outline-[3px] "
      type="button"
      key={"pageButton" + pageNum}
      disabled={creation.pageNum === pageNum}
      onClick={() => handler.changePage(pageNum)}
    >
      {pageNum}
    </Button>
  );
};
