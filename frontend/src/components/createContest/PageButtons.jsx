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
        className="bg-secondary-300 text-secondary-900 hover:bg-secondary-400 disabled:bg-secondary-800 disabled:text-secondary-600 bg-none px-2 py-1 md:px-6"
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
      {totalPages > 1 && <PageBtn pageNum={totalPages}>{totalPages}</PageBtn>}

      <Button
        className="bg-secondary-300 text-secondary-900 hover:bg-secondary-400 disabled:bg-secondary-800 disabled:text-secondary-600 bg-none px-2 py-1 md:px-6"
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
      className="bg-secondary-400 text-secondary-900 outline-secondary-950 hover:bg-secondary-300 disabled:bg-secondary-300 size-8 bg-none outline disabled:outline-4 md:size-10"
      type="button"
      key={"pageButton" + pageNum}
      disabled={creation.pageNum === pageNum}
      onClick={() => handler.changePage(pageNum)}
    >
      {pageNum}
    </Button>
  );
};
